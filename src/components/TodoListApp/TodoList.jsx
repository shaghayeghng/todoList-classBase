import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <Todo 
                        TodoText={todo.TodoText}
                        checked={todo.checked} 
                    />
                );
            })}
        </div>
    );
};

export default TodoList;