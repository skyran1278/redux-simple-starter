import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search_bar'

const API_KEY = 'AIzaSyDZe4cUXnA4bNNqnEgyK4FXuywVbO7JNFc';

class App extends Component {
  render() {
    return (
      <div>
        <Search></Search>
      </div>
    );
  }
}

export default App;
