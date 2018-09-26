import React from 'react';
import ListBooks from './ListBooks'

class BookShelves extends React.Component {
	render () {
		return(
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelf}</h2>
                  <div className="bookshelf-books">
          					<ListBooks onChangeShelf={this.props.onChangeShelf} books={this.props.books} shelf={this.props.shelfID}/>
                  </div>
                </div>
	          </div>
          	
		)
	}
}

export default BookShelves