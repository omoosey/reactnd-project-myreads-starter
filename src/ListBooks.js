import React from 'react';
import SelectShelf from './SelectShelf'

class ListBooks extends React.Component {

	render() {
		let currentBooks = this.props.books
    let shelf = this.props.shelf;
    
		return (
      <ol className="books-grid">
      {currentBooks.filter(book => {
        return book.shelf === shelf;
      }).map((book) => 
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{width: 128, height: 193, backgroundImage: 'url("'+book.imageLinks.thumbnail+'")'}}></div>
              <div className="book-shelf-changer">
                <SelectShelf onChangeShelf={this.props.onChangeShelf} book={book} shelf={book.shelf}/>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
        )
      }
      </ol>
  	)
	}
}

export default ListBooks