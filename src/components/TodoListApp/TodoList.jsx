import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, filteredTodos, setTodos }) => {
  return (
    <div>
      {filteredTodos.map((todo) => {
        return (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            // .TodoText={todo.TodoText}
            // checked={todo.checked}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
