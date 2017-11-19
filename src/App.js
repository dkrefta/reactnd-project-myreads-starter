import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
<<<<<<< HEAD
import LineBooks from './LineBooks'
import { Route } from 'react-router-dom'

=======
import BookshelfChanger from './BookshelfChanger'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
>>>>>>> 82a79f117c947666e322ddbb35c8f2bd032fa075

class BooksApp extends React.Component {
	state = {
		books: [],
	}

	componentDidMount() {
<<<<<<< HEAD
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
=======
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }

  handleChangeShelf = (book: any, shelf: string) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getBooksOnShelf();
    });
  };

  getBooksOnShelf() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookshelfChanger booksOnShelf={this.state.books} />} />
        <Route
          path="/search"
          render={() =>
            <SearchBooks onChangeShelf={this.handleChangeShelf} booksOnShelf={this.state.books} />}
        />
      </div>
    );
  }
}
>>>>>>> 82a79f117c947666e322ddbb35c8f2bd032fa075

export default BooksApp;
