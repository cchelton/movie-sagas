import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

class Details extends Component {
  render() {
    const genres = this.props.store.selected_movie_genres.genres.join(", ");
    return (
      <div>
        <div>
          <img
            src={this.props.store.selected_movie_genres.poster}
            alt={this.props.store.selected_movie_genres.titles}
          />

          <Typography variant="h4" component="h4">
            {this.props.store.selected_movie_genres.title}
          </Typography>

          <Typography variant="subheading">Genres: {genres}</Typography>

          <Typography variant="body1" component="p">
            {this.props.store.selected_movie_genres.description}
          </Typography>
        </div>
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});
export default connect(putStoreOnProps)(Details);
