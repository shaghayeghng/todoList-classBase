import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import AuthPage from './pages/AuthPage';
import TodoListPage from './pages/TodoListPage';
import HomePage from './pages/HomePage';

import './app.css';

class App extends Component {

  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/auth' component={AuthPage} />
          <Route path='/todolist' component={TodoListPage} />
        </Switch>
      </>
    );
  }

};

export default App;