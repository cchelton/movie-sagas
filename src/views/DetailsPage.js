import React, { Component } from "react";
import { connect } from "react-redux";
import Details from "../components/Details/Details";
import ToListButton from "../components/ToListButton/ToListButton";

class DetailsPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch({
      type: "GET_MOVIE_GENRES",
      payload: id,
    });
  }

  render() {
    const selectedMovie = this.props.store.selected_movie_genres[0];
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

export default connect(putStoreOnProps)(DetailsPage);
