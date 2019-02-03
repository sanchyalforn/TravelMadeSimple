import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage/mainPage.js'
import Register from './components/Register/register.js'
import Login from './components/Login/login.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/home" exact component={MainPage} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
