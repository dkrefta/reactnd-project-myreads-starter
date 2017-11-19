<<<<<<< HEAD
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component{

  state = {
    books: []
  }

  search = (val) => {
   if(val){
     BooksAPI.search(val, 1000).then(books => {
       if(books.error){
         books = []
       }
       this.setState({books})
     })
   } else {
     this.setState({books:[]})
   }
 }

 updateBook = (book, shelf) =>{
     this.props.updateBook(book, shelf)
   }
render () {
   const {books} = this.state
}
return (
     <div className="search-books">
       <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
         <div className="search-books-input-wrapper">
           <input type="text" placeholder="Search by title or author" />
         </div>
       </div>
       <div className="search-books-results">
         <ol className="books-grid">
         {books.map((book) =>(
            <li key={book.id}>
              <Book book={ this.props.books.find(b => b.id === book.id) || book } updateBook={ this.updateBook } />
            </li>
          ))}
                </ol>
              </div>
            </div>

export default SearchBooks
=======
import React from "react";
import { debounce } from 'throttle-debounce';
import { Link } from "react-router-dom";;
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class SearchPage extends React.Component {
  state = {
    query: "",
    books: []
  };


  constructor() {
    super();
    this.searchInput.debounceTime(500).subscribe(param => {
      this.fireSearchBook(param);
    });
  }

  updateQuery = (query: string) => {
    this.setState({
      query: query
    });
    if (query) {
      this.searchInput.next(query);
    } else {
      this.setState({
        books: []
      });
    }
  };

  updateBooks(books: any) {
    const verifiedBooks = books.map(book => {
      book.shelf = "none";
      this.props.booksOnShelf.forEach(bookOnShelf => {
        if (book.id === bookOnShelf.id) {
          book.shelf = bookOnShelf.shelf;
        }
      });
      return book;
    });
    this.setState({
      books: verifiedBooks
    });
  }

  fireSearchBook(query: string) {
    BooksAPI.search(query, 20).then(
      response => {
        if (response.error) {
          this.setState({
            books: []
          });
        } else {
          this.updateBooks(response);
        }
      },
      error => {
        console.log("error ocurred");
      }
    );
  }

  updateBookOnSearch(book: any, shelf: string) {
    let temp = this.state.books;
    const bookToUpdate = temp.filter(t => t.id === book.id)[0];
    bookToUpdate.shelf = shelf;
    this.setState({
      books: temp
    });
    this.props.onChangeShelf(book, shelf);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book =>
              <li key={book.id} className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select
                      value={book.shelf}
                      onChange={e => {
                        this.updateBookOnSearch(book, e.target.value);
                      }}
                    >
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">
                  {book.title}
                </div>
                {book.authors &&
                  <div className="book-authors">
                    {book.authors[0]}
                  </div>}
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
>>>>>>> 82a79f117c947666e322ddbb35c8f2bd032fa075
