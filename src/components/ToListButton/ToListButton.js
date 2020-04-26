import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ToListButton extends Component {
  handleClick = (event) => {
    this.props.history.push("/");
  };
  render() {
    return <button onClick={this.handleClick}>back to list</button>;
  }
}

export default withRouter(ToListButton);
