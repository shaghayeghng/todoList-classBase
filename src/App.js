import React, { Component } from 'react';
import AddBar from './components/AddBar';
import './app.css';

class App extends Component {
  state = { todo: [] };
  onAddSubmit = (item) => {
  //adding item to list  
  };

  render() {
    return (
      <div>
        <AddBar onSubmit={this.onAddSubmit} />
      </div>

    )
  }

};

export default App;