import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"> Home page</Link>
                </li>
                <li>
                    <Link to="/auth"> Login</Link>
                </li>
                <li>
                    <Link to="/todolist"> Your TodoList</Link>
                </li>
            </ul>
        </nav>

    );
};

export default Nav;