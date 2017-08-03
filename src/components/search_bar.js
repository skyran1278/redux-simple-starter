import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '1' }
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        <div>
          <button>{ this.state.term }</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;