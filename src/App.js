import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";
import "./App.css";
import SignUp from "./components/signup";
import HomePage from "./components/homePage";
import AdminPanel from "./components/adminPanel";

class App extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/homePage" component={HomePage} />
          <Route path="/adminPanel" component={AdminPanel} />
          <Route path="/" component={SignUp} />
        </Switch>
      </div>
      // <Home />
    );
  }
}

export default App;
