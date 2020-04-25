import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ListPage from "../../views/ListPage/ListPage";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header>
          <h1>Movie Sagas</h1>
        </header>
        <Router>
          <Route exact path="/" component={ListPage} />
        </Router>
      </div>
    );
  }
}

export default App;
