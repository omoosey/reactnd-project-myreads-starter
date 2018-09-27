import React from 'react';
import BookShelves from './BookShelves'
import { Link } from 'react-router-dom'

class BookCase extends React.Component {


	render() {
		let shelves = [];
		let currentlyReading = false;
		let wantToRead = false;
		let read = false;

		// Create shelves based on book array
		this.props.books.forEach((book) => {
			if(book.shelf === "currentlyReading" && currentlyReading === false) {
				shelves.push(
					<BookShelves onChangeShelf={this.props.onChangeShelf} books={this.props.books} shelfID={book.shelf} key={book.shelf} shelf='Currently Reading'/>
				);
				currentlyReading = true;
			} else if(book.shelf === "wantToRead" && wantToRead === false) {
				shelves.push(
					<BookShelves onChangeShelf={this.props.onChangeShelf} books={this.props.books} shelfID={book.shelf} key={book.shelf} shelf='Want To Read'/>
				);
				wantToRead = true;
			} else if(book.shelf === "read" && read === false) {
				shelves.push(
					<BookShelves onChangeShelf={this.props.onChangeShelf} books={this.props.books} shelfID={book.shelf} key={book.shelf} shelf='Read'/>
				);
				read = true;
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