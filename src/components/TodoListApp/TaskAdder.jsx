import React, { Component } from "react";
import "./TaskAdder.css";

class TaskAdder extends Component {
  state = { taskInput: "" };
  //event handler
  onFilterChange = (event) => {
    this.props.onFilterChange(event.target.value);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.taskInput === "") {
      return alert("Nothing has been submited!");
    }

    this.props.onSubmit([
      ...this.props.todos,
      {
        TodoText: this.state.taskInput,
        checked: false,
        id: Math.random() * 100,
      },
    ]);
    this.setState({ taskInput: "" });
  };

  render() {
    return (
      <div className="todo-container">
        <h1>Your Todo List</h1>
        <form className="add-form" action="" onSubmit={this.onFormSubmit}>
          <input
            onChange={(e) => this.setState({ taskInput: e.target.value })}
            placeholder="add task to do"
            value={this.state.taskInput}
            type="text"
          />
          <button type="submit">
            <i className="fas fa-plus"></i>
          </button>
          <select
            className="filter-bar"
            onChange={this.onFilterChange}
            value={this.props.selectedFilter}
          >
            <option value="all"> All</option>
            <option value="finished"> Finished</option>
            <option value="unfinished"> Unfinished</option>
          </select>
        </form>
      </div>
    );
  }
}
export default TaskAdder;
