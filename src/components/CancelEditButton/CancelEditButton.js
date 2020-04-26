import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";

class CancelEditButton extends Component {
  handleClick = (event, id) => {
    this.props.history.push(`/details/${id}`);
  };
  render() {
    const movieID = this.props.movieID;
    return (
      <Button
        variant="contained"
        onClick={(event) => {
          this.handleClick(event, movieID);
        }}
      >
        Cancel
      </Button>
    );
  }
}

export default withRouter(CancelEditButton);
