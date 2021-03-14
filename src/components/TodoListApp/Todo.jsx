import React from 'react';
import './Todo.css';

const Todo = ({TodoText, checked}) => {
    return (
        <div className="todo-list">
            <ul>
                <li>{TodoText}</li>
            </ul>
        </div>
    );
};

export default Todo;