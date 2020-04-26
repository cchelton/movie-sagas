import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CancelEditButton extends Component {
  handleClick = (event, id) => {
    this.props.history.push(`/details/${id}`);
  };
  render() {
    const movieID = this.props.movieID;
    return (
      <button
        onClick={(event) => {
          this.handleClick(event, movieID);
        }}
      >
        Cancel
      </button>
    );
  }
}

export default withRouter(CancelEditButton);
