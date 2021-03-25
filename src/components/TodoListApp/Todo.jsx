import React from "react";
import "./Todo.css";

const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(
      todos.filter(
        (el) => el.id !== todo.id //*return
      )
    );
  };
  const completeHandler = () => {
    setTodos(
      todos.map((task) => {
        if (task.id === todo.id) {
          return {
            ...task, //*be baghie vijegi ha kari nadarim (spread)
            checked: !task.checked,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todo-list">
      <ul>
        <li>
          <span
            className={`task-name ${todo.checked ? "completed" : ""}
                        `}
          >
            {todo.TodoText}
          </span>
          <span>
            <button className="complete-btn" onClick={completeHandler}>
              <i className="fas fa-check"></i>
            </button>
            <button className="delete-btn" onClick={deleteHandler}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
