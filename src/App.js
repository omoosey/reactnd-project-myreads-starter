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

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  searchBooks = (book) => {
    BooksAPI.search(book).then((book) => {
      book.map((book) => {
        console.log(book.id)
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" exact render={() => (
          <SearchBooks/>
        )}/>
        <Route path="/" exact render={() => (
          <BookCase books={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
