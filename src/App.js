import React, { Component } from "react";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Header from "./component/Header";
import Dashboard from "./component/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

export default App;
