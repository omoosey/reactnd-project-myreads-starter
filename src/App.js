import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

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
          <ListBooks
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
