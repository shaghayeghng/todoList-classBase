import React from "react";
import TaskAdder from "./TaskAdder";
import TodoList from "./TodoList";

class TodoListApp extends React.Component {
  state = {
    todos: [],
    filteredTodos: [],
    selectedOption: "all",
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
            (task) => task.checked === true
          ),
        });
        break;
      case "unfinished":
        this.setState({
          filteredTodos: this.state.todos.filter(
            (task) => task.checked === false
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
          todos={this.state.todos}
          onFilterChange={this.onFilterChange}
          onSubmit={this.setTodos}
          selectedFilter={this.selectedOption}
        />
        <TodoList
          todos={this.state.todos}
          filteredTodos={this.state.filteredTodos}
          setTodos={this.setTodos}
        />
      </div>
    );
  }
}

export default TodoListApp;
