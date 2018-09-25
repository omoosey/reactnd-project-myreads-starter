import React from 'react';
import ListBooks from './ListBooks'
import { Link } from 'react-router-dom'

class BookShelves extends React.Component {
	render () {
		const shelf = this.props.shelf;

		return(
		
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf}</h2>
                  <div className="bookshelf-books">
					<ListBooks books={this.props.books}/>
                  </div>
                </div>
	          </div>
          	
		)
	}

}

export default BookShelves