import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import AuthPage from './pages/AuthPage';
import TodoListPage from './pages/TodoListPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import Cookies from 'universal-cookie';

import './app.css';

class App extends Component {
  state = { isAuthenticated: false, username:'' };
  cookie = new Cookies();

  authHandler = () => {
    this.setState({ isAuthenticated: true });
  };
  
  componentDidMount = () => {
    const authCookie = this.cookie.get('token');
    authCookie ? this.authHandler() : this.logoutHandler();
  }
  
  logoutHandler = () => {
    this.setState({ isAuthenticated: false });
    this.cookie.remove('token');
  };
  usernameHandler = (term) => {
    this.setState({ username: term });
  }

  render() {
    return (
      <>
        <Nav 
          isAuthenticated={this.state.isAuthenticated}
          logoutHandler={this.logoutHandler}
          username={this.state.username}
        />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/auth'>
            <AuthPage
              isAuthenticated={this.state.isAuthenticated}
              authHandler={this.authHandler} 
            />
            </Route> 
             
          <ProtectedRoute
            auth={this.state.isAuthenticated}
            path='/todolist'
          >
             <TodoListPage usernameHandler={this.usernameHandler} /> 
          </ProtectedRoute>
          {/*age mese balayi bashe byd to ProtectedRoute ...rest ezafe koni*/}
        </Switch>
      </>
    );
  }

};

export default App;