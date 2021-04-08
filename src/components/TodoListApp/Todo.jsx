import React from "react";
import "./Todo.css";
import axios from "axios";

class Todo extends React.Component {
  deleteHandler = async () => {
    try {
      const deleteTodoData = await axios.delete(
        `http://localhost:8000/api/v1/todos/${this.props.todo._id}`,
        {
          headers: {
            Authorization: `Bearer ${this.props.token}`,
          },
        }
      );
      this.props.setTodos(
        this.props.todos.filter(
          (el) => el._id !== this.props.todo._id //*return
        )
      );
      console.log(deleteTodoData);
    } catch (error) {
      return alert(error.response);
    }
  };

  //* put=replace , patch=modify (baraye taqirhaye kochik masln ye attribute)
  completeHandler = async () => {
    try {
      const completeTodoData = await axios.patch(
        `http://localhost:8000/api/v1/todos/${this.props.todo._id}`,
        {
          isChecked: !this.props.todo.isChecked,
        },
        {
          headers: {
            Authorization: `Bearer ${this.props.token}`,
          },
        }
      );
      console.log(completeTodoData);

      this.props.setTodos(
        this.props.todos.map((task) => {
          if (task._id === this.props.todo._id) {
            return {
              ...task, //*be baghie vijegi ha kari nadarim (spread)
              isChecked: !task.isChecked,
            };
          }
          return task;
        })
      );
    } catch (error) {
      console.log(error.response);
    }
  };
  render() {
    const { todo } = this.props;
    return (
      <div className="todo-list">
        <ul>
          <li>
            <span className={`task-name ${todo.isChecked ? "completed" : ""}`}>
              {todo.TodoText}
            </span>
            <span>
              <button className="complete-btn" onClick={this.completeHandler}>
                <i className="fas fa-check"></i>
              </button>
              <button className="delete-btn" onClick={this.deleteHandler}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Todo;
