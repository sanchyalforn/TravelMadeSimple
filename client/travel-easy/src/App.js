import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage/mainPage.js'
import Register from './components/Register/register.js'
import Login from './components/Login/login.js'
import MyTrips from './components/Trips/trips.js'
import NewTrip from './components/Trips/newtrip.js'
import Tips from './components/Tips/tips.js'
import NewTip from './components/Tips/newTip.js'
import SearchTrips from './components/SearchTrip/searchTrip.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/home" exact component={MainPage} />
          <Route path="/home/my-trips" exact component={MyTrips} />
          <Route path="/home/new-trip" exact component={NewTrip} />
          <Route path="/home/tips" exact component={Tips} />
          <Route path="/home/new-tip" exact component={NewTip} />
          <Route path="/home/search-trip" exact component={SearchTrips} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
