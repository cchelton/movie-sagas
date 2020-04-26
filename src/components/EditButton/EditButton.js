import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class EditButton extends Component {
  handleClick = (event, id) => {
    this.props.history.push(`/edit/${id}`);
  };
  render() {
    const movieID = this.props.movieID;
    return (
      <button
        onClick={(event) => {
          this.handleClick(event, movieID);
        }}
      >
        Edit
      </button>
    );
  }
}

export default withRouter(EditButton);
