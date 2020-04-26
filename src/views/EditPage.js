import React, { Component } from "react";
import { connect } from "react-redux";
import Details from "../components/Details/Details";
import ToListButton from "../components/ToListButton/ToListButton";

class EditPage extends Component {
  render() {
    const selectedMovie = this.props.store.selected_movie_genres;
    return (
      <div>
        <h2>Movie ID: {this.props.match.params.id}</h2>
        <Details selectedMovie={selectedMovie} />
        <ToListButton />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(EditPage);
