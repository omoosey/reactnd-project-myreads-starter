import React from 'react';
import BookShelves from './BookShelves'
import { Link } from 'react-router-dom'

class BookCase extends React.Component {
	render() {


		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
					<BookShelves books={this.props.books}/>
				</div>
	          	<div className="open-search">
	              <Link to="/search">Add a book</Link>
	            </div>
	      	</div>
		)
	}
}

export default BookCase