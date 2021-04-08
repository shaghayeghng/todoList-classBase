import React from "react";
import TaskAdder from "./TaskAdder";
import TodoList from "./TodoList";
import Cookies from "universal-cookie";
import axios from "axios";

class TodoListApp extends React.Component {
  state = {
    todos: [],
    filteredTodos: [],
    selectedOption: "all",
  };
  cookies = new Cookies();
  token = this.cookies.get("token");

  componentDidMount = async () => {
    try {
      const userData = await axios.get(
        "http://localhost:8000/api/v1/users/me",
        {
          headers: {
            Authorization: `Bearer ${this.token}`, //means the header have token
          },
        }
      ); //ta motmaen shim token doroste
      console.log(userData.data.data.doc.username);
      this.props.usernameHandler(userData.data.data.doc.username);
      this.getTodos();
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  getTodos = async () => {
    const userTodos = await axios.get("http://localhost:8000/api/v1/todos", {
      headers: {
        Authorization: `Bearer ${this.token}`, //means the header have token
      },
    });
    console.log(userTodos);
    this.setTodos(userTodos.data.todos);
  };

  componentDidUpdate(prevProps, prevState, snapShot) {
    //! this.filterOptionHandler();
    //dakhl componentDidUpdate nabyd functioni bashe ke baes she component dobare render beshe

    if (
      prevState.todos !== this.state.todos ||
      prevState.selectedOption !== this.state.selectedOption
    ) {
      this.filterOptionHandler();
    }
  }

  setTodos = (tasks) => {
    this.setState({ todos: tasks });
    //* this.setState([...this.state.todos, task]);
    // array be jaye inja dakhl component moratab mishe chon az in function jahaye dg ham estefade mishe
  };

  onFilterChange = (option) => {
    this.setState({ selectedOption: option });
  };

  filterOptionHandler = () => {
    switch (this.state.selectedOption) {
      case "finished":
        this.setState({
          filteredTodos: this.state.todos.filter(
            (task) => task.isChecked === true
          ),
        });
        break;
      case "unfinished":
        this.setState({
          filteredTodos: this.state.todos.filter(
            (task) => task.isChecked === false
          ),
        });
        break;
      default:
        this.setState({ filteredTodos: this.state.todos });
        break;
    }
  };
  render() {
    return (
      <div>
        <TaskAdder
          token={this.token}
          todos={this.state.todos}
          onFilterChange={this.onFilterChange}
          onSubmit={this.setTodos}
          selectedFilter={this.selectedOption}
        />
        <TodoList
          token={this.token}
          todos={this.state.todos}
          filteredTodos={this.state.filteredTodos}
          setTodos={this.setTodos}
        />
      </div>
    );
  }
}

export default TodoListApp;
