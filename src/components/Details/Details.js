import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  render() {
    const genreElements = this.props.store.selected_movie_genres.genres.map(
      (item, index) => <li key={index}>{item}</li>
    );
    return (
      <div>
        <h2>More details about:</h2>
        <div>
          <h3>Title: {this.props.store.selected_movie_genres.title}</h3>
          <p>
            Description: {this.props.store.selected_movie_genres.description}
          </p>
          <img
            src={this.props.store.selected_movie_genres.poster}
            alt={this.props.store.selected_movie_genres.titles}
          />
          <ul>{genreElements}</ul>
        </div>
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});
export default connect(putStoreOnProps)(Details);