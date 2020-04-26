import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ListPage from "../../views/ListPage/ListPage";
import DetailsPage from "../../views/DetailsPage/DetailsPage";
import EditPage from "../../views/EditPage/EditPage";
import Header from "../Header/Header";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={ListPage} />
          <Route path="/details/:id" component={DetailsPage} />
          <Route path="/edit/:id" component={EditPage} />
        </Router>
      </div>
    );
  }
}

export default App;
