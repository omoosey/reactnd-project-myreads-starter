import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  searchBooks = (book) => {
    BooksAPI.search(book).then((book) => {
      console.log(book)
    })
  }


  render() {
    return (
      <div className="app">
      {this.searchBooks('Space')}
        <Route path="/search" exact render={() => (
          <SearchBooks/>
        )}/>
        <Route path="/" exact render={() => (
          <ListBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
