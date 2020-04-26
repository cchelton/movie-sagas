import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";

class ToListButton extends Component {
  handleClick = (event) => {
    this.props.history.push("/");
  };
  render() {
    return (
      <Button variant="contained" onClick={this.handleClick}>
        back to list
      </Button>
    );
  }
}

export default withRouter(ToListButton);
