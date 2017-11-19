import React from 'react'
import { Link } from 'react-router-dom'

const LineBooks (props) => {
  const { title, updateBook, books} = props

  return (

<div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content">
    <div>
      <BookShelf
        title="Currently Reading"
        books={books.filter(
          book => book.shelf === 'currentlyReading'
        )}
        handleShelfChange={this.handleShelfChange}
      />
      <BookShelf
        title="Want to Read"
        books={books.filter(book => book.shelf === 'wantToRead')}
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
)
}

export default LineBooks 
