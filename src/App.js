import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookshelfChanger from './BookshelfChanger'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
	state = {
		books: [],
	}

	componentDidMount() {
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

export default BooksApp;
