import React from 'react';

class SelectShelf extends React.Component {
	state = {
		shelf: this.props.shelf
	}

	//Changes shelf of book
	handleChange = (event) => {
		this.setState({shelf: event.target.value})
		this.props.onChangeShelf(this.props.book, event.target.value)
	}
	

	render() {
		return(
			<select value={(this.props.shelf === null) ? 'none' : this.props.shelf} onChange={this.handleChange}>
	          <option value="move" disabled>Move to...</option>
	          <option value="currentlyReading">Currently Reading</option>
	          <option value="wantToRead">Want to Read</option>
	          <option value="read">Read</option>
	          <option value="none">None</option>
            </select>
		)
	}
}

export default SelectShelf