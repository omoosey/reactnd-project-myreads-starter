import React from 'react';
import BookShelves from './BookShelves'
import { Link } from 'react-router-dom'

class BookCase extends React.Component {
	render() {
		let shelves = [];
		let _isMounted = false;

		this.props.books.forEach((book) => {
			if(book.shelf === "currentlyReading" && _isMounted === false) {
				shelves.push(
					<BookShelves books={this.props.books} shelfID={book.shelf} key={book.shelf} shelf='Currently Reading'/>
				);
				_isMounted = true;
			} else if(book.shelf === "wantToRead" && _isMounted === true) {
				shelves.push(
					<BookShelves books={this.props.books} shelfID={book.shelf} key={book.shelf} shelf='Want To Read'/>
				);
				_isMounted = false;
			} else if(book.shelf === "read" && _isMounted === false) {
				shelves.push(
					<BookShelves books={this.props.books} shelfID={book.shelf} key={book.shelf} shelf='Read'/>
				);
				_isMounted = true;
			}
		})


		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
					{shelves}					
				</div>
	          	<div className="open-search">
	              <Link to="/search">Add a book</Link>
	            </div>
	      	</div>
		)
	}
}

export default BookCase