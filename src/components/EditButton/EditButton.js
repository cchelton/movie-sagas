import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";

class EditButton extends Component {
  handleClick = (event, id) => {
    this.props.history.push(`/edit/${id}`);
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
        Edit
      </Button>
    );
  }
}

export default withRouter(EditButton);
