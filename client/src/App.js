import logo from './logo.svg';
import abcd from './abcd.jpg';
import React, { Component } from "react";
import './App.css';
import SignupComponent from './SignupComponent';
import HeaderComponent from './HeaderComponent';
import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Router>
      <HeaderComponent/>
      <Route path="">
          <HomeComponent/>
      </Route>
      <Route path="/Login">
          <LoginComponent/>
      </Route>
      <Route path="/Signup">
          <SignupComponent/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
