import React from 'react'
import Book from './Book'

const Bookshelf = ({ title, books, handleShelfChange}) => (
  <div className="bookshelf">
  <h2 className="bookshelft-title"> {title}</h2>
  <div clasName="bookshelf-books">
  <ol className="books-grid">
  {books.map(book =>(
    <li key={books.id}>
    <Book book={book} handleShelfChange={handleShelfChange} />
    </li>
  ))}
</ol>
</div>
</div>

)

BookSheft.defaultProps = {
  title: '',
  books: [],
}

export default BookSheft
