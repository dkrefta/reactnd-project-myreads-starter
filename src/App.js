import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import bookshelf from './BookSheft'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
  }

 componentDidMount () {
   BooksApi.getAll().then(books => this.setState({books}))
 }
 handleShelfChange = (id, event ) => {
   const books = this.state.books
   const bookIndex = books.findIndex ( book => book.id === id)
   const book = books [booksIndex]

   books[booksIndex] = book
   this.setState({books})

   booksAPI.update(book, event.target.value)
  }

  render () {
    const {books } = this.state
    return (
      <div className="app">
      {this.state.showSearchPage ? (
        <div className="search-books">
        <div className="search-books-bar"
        <a
        className="close-search"
        onClick={() => this.setState({ showSearchPage: false})
      }

        Close
      </a>
      <div className="search-books-input-wrapper">
								{/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
								<input type="text" placeholder="Search by title or author" />
							   </div>
              </div>
              <div className="search-books-results">
              <ol calssName="books-grid"/>
              </div>
              </div>
            ) : (
              <div className="list=books">
                <div className="list-books-title">
                  <h1> MyReads </h1>
              </div>
                <div className="list-books-content">
                   <BookSheft
                     title="Currently Reading"
                        books={books.filter(
                        book => book.shelft === 'currentlyReading'
              )}
              handleShelfChange={this.handleShelfChange}
              />
              <BookSheft
                title="Wat to Read"
                books={books.filter( book => book.shelf === 'wantToRead')}
                  book => book.shelft === 'wantToRead'
                handleShelfChange={this.handleShelfChange}
               />
              <BookSheft
              title="Read"
              books={books.filter( book => book.shelft === 'read')}
                handleShelfChange={this.handleShelfChange}
              />
              <BookShelf
									title="Read"
									books={books.filter(book => book.shelf === 'read')}
									handleShelfChange={this.handleShelfChange}
								/>
							</div>
						</div>
						<div className="open-search">
							<a onClick={() => this.setState({ showSearchPage: true })}>
								Add a book
							</a>
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default BooksApp
