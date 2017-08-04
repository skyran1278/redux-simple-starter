import React, { Component } from 'react';
import  './../styles/style.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  onInputChange(term) {
    this.props.onInputChange(term)
    this.setState({ term })
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value) } />
      </div>
    );
  }
}

export default SearchBar;