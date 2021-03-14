import React from 'react';
import Form from './Form';
import TodoList from './TodoList'

class TodoListApp extends React.Component {
    state = { todos: [] };
    onAddSubmit = (item) => {
        //adding item to list  
        this.setState({ todos:[...this.state.todos, item] })
    };
    render() {
        return (
          <div>
            <Form onSubmit={this.onAddSubmit} />
            <TodoList todos={this.state.todos} />
          </div>
    
        )
      }
};

export default TodoListApp;