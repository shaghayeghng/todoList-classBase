import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ isAuthenticated, logoutHandler, username }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Home page</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link onClick={logoutHandler} to="/auth">
                {" "}
                Log out
              </Link>
            </li>
            <li>
              <Link to="/todolist"> Your TodoList</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/auth"> Login / Sign Up</Link>
          </li>
        )}
        {isAuthenticated ? (
          <li className="welcome">
            {" "}
            Hello Dear<span className="username"> {username}</span>{" "}
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Nav;
