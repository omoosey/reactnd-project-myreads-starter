import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookCase from './BookCase'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  // Updates books array when component mounts
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  searchBooks = (book) => {
    BooksAPI.search(book).then((search) => {
      return search;
    })

  }

  // Update book's shelf property to selected shelf
  changeShelf = (selectedBook, selectedShelf) => {
    BooksAPI.update(selectedBook, selectedShelf).then((books) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    });
  }

  render() {

    return (
      <div className="app">
        <Route path="/search" exact render={() => (
          <SearchBooks books={this.state.books} onBookSearch={this.searchBooks} onChangeShelf={this.changeShelf}/>
        )}/>
        <Route path="/" exact render={() => (
          <BookCase books={this.state.books} onChangeShelf={this.changeShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
