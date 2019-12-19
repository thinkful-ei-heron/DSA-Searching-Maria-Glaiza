import React, { Component } from 'react';
import SearchForm from './SearchForm';
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Linear vs. Binary Search</h1>
        </header>
        <SearchForm />
      </div>
    );
  }
}

export default App;
