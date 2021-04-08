import React from 'react';
import TodoListApp from '../components/TodoListApp';

const TodoListPage = ({
    usernameHandler
}) => {
    return <TodoListApp usernameHandler = {
        usernameHandler
    }
    />;
};

export default TodoListPage;