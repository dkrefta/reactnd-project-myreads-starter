import react from 'react'
import Select from './Select'

const Book ({ book, handleShelfChange }) => (
  <div className="book">
  <div className="book-top">
  <div
  className="book-coover"
  style={(
    width:128,
    height: 192,
    backgroundImage: 'url(${book.imageLinks.smallThumbnail})',
  )}
  />
  <div className="book-shelf-changer">
  <Select
  handleChange={handleShelfChange}
  bookId={book.id}
  BookShelf={book.shelf}
  />
  </div>
  </div>
  <div className="book-title" {book.title}</div>
  <ul className="book-authors" {book.author}</div>
  {book.authors.map }
)
})
