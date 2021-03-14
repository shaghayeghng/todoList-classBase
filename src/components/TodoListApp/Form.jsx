import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  state = { addItem: "" };
  //event handler
  onFormSubmit = (event) => { 
    event.preventDefault();

    this.props.onSubmit({ 
      TodoText: this.state.addItem, 
      checked: false, 
      id: Math.random() * 100,});

    this.setState({ addItem: "" });
  };

  render() {
    return (
      <div className="todo-container">
        <h1>Your Todo List</h1>
        <form className="add-form" action="" onSubmit={this.onFormSubmit}>
          <input
            onChange={(e) => this.setState({ addItem: e.target.value })}
            placeholder="add todo..."
            value={this.state.addItem}
            type="text"
          />
          <button type="submit">add</button>
          <select className="filter-bar">
            <option value="all"> All</option>
            <option value="finished"> Finished</option>
            <option value="unfinished"> Unfinished</option>
          </select>
        </form>
      </div>
    );
  }
}
export default Form;
