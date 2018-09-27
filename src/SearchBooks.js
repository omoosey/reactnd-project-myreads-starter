import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SelectShelf from './SelectShelf'

class SearchBooks extends React.Component {
	state = {
		books: [],
		query: ''
	}

	
	// Update query value and run search based on query value
	updateQuery = (query) => {
		this.setState({
			query: query.trim()
		})
		BooksAPI.search(query).then((results) => {
			if(!results.error){
				this.setState({books: results})
				results.forEach((result) => {
					let found = this.props.books.filter((book) => {
						return book.id === result.id;
					})
					result.shelf = found[0] ? found[0].shelf : null;
				})
			} else {
				alert('INVALID SEARCH TERMS')
			}
		}).catch((error) => console.log(error))
	}

	handleSubmit = (event) => {
		this.props.onBookSearch();
	}

	render () {
		
		return (
			<div className="search-books">
	            <div className="search-books-bar">
	              <Link className="close-search" to="/">Close</Link>
		              <div className="search-books-input-wrapper">
		                {/*
		                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
		                  You can find these search terms here:
		                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

		                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
		                  you don't find a specific author or title. Every search is limited by search terms.
		                */}
		                <input 
		                	value={this.state.query}
		                	id="textInput" 
		                	type="text" 
		                	placeholder="Search by title or author"
		                	onChange={(event) => {this.updateQuery(event.target.value)}}/>

		              </div>
	            </div>
	            <div className="search-books-results">
					 <ol className="books-grid">
				      {this.state.books.map((book) => 
				        <li key={book.id}>
				          <div className="book">
				            <div className="book-top">
				              <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'http://3.bp.blogspot.com/-s3yBaPBn8Hc/Uh4-wAZOQLI/AAAAAAAAJT8/GY9d_VJFm3o/s1600/play-books-no-cover.jpg' }`}}></div>
				              <div className="book-shelf-changer">
				              	<SelectShelf onChangeShelf={this.props.onChangeShelf} book={book} shelf={book.shelf} />
				              </div>
				            </div>
				            <div className="book-title">{book.title}</div>
				            <div className="book-authors">{book.authors}</div>
				          </div>
				        </li>
				        )
				      }
				    </ol>
	            </div>
		    </div>
	    )
		
	}
}

export default SearchBooks