import axios from "axios";
import React, { Component } from "react";
import "./TaskAdder.css";

class TaskAdder extends Component {
  state = { taskInput: "" };
  //event handler
  onFilterChange = (event) => {
    this.props.onFilterChange(event.target.value);
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    if (this.state.taskInput === "") {
      return alert("Nothing has been submited!");
    }
    //in function fqt todo hayi ke jadide az server migire va ezafe mikone
    try {
      const addingTodoData = await axios.post(
        "http://localhost:8000/api/v1/todos/",
        {
          //to server
          name: "todos",
          TodoText: this.state.taskInput,
          isChecked: false,
        },
        {
          headers: {
            Authorization: `Bearer ${this.props.token}`, //means the header have token
          },
        }
      );
      console.log(addingTodoData);
      this.props.onSubmit([
        ...this.props.todos,
        {
          //not going to server
          TodoText: this.state.taskInput,
          isChecked: false,
          _id: addingTodoData.data.data._id,
        },
      ]);
      this.setState({ taskInput: "" });
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    return (
      <div className="todo-container">
        <h1 className="title">Your Todo List</h1>
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
          <div className="filter-bar">
            <i className="fas fa-sort-down"></i>
            <select
              onChange={this.onFilterChange}
              value={this.props.selectedFilter}
            >
              <option value="all"> All</option>
              <option value="finished"> Finished</option>
              <option value="unfinished"> Unfinished</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}
export default TaskAdder;
