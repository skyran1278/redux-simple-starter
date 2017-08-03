import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input onChange={this.onInputChange} />
            </div>
        );
    }

    onInputChange(event) {
        console.log(event)
    }
}

export default SearchBar;