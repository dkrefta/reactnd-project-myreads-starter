import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import LineBooks from './LineBooks'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
	state = {
		showSearchPage: false,
		books: [],
	}

	componentDidMount() {
		BooksAPI.getAll().then(books => this.setState({ books }))
	}

	handleShelfChange = (id, event) => {
		const books = this.state.books
		const bookIndex = books.findIndex(book => book.id === id)
		const book = books[bookIndex]
		book.shelf = event.target.value

		books[bookIndex] = book
		this.setState({ books })

		BooksAPI.update(book, event.target.value)
	}

	render() {
		const { books } = this.state

		return (
			<div className="app">
			{(this.state.books) ? (
				 <div>
            <Route path="/search" render={({ history })=> (
              <SearchBooks books={ this.state.books } updateBook={ (book, shelf) => {
                this.updateBook(book, shelf)
                history.push('/')
              }}/>
            )} />
            <Route exact path="/" render={({ history }) => (
              <BookShelf
                books={ this.state.books }
                bookShelf={ bookShelf }
                updateBook={ (book, shelf) => this.updateBook(book, shelf) }
              />
            )} />
            <Route path="/books/:id" component={ BookDetail } />
          </div>
        )

export default BooksApp
