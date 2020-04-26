import React, { Component } from "react";
import { connect } from "react-redux";
import "./Gallery.css";
import GalleryItem from "./GalleryItem/GalleryItem";

class Gallery extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
  }

  render() {
    //  make GalleryItems
    const GalleryItems = this.props.store.movies.map((item, index) => (
      <GalleryItem item={item} key={index} />
    ));

    return (
      <div>
        <h4>Gallery</h4>
        <div>{GalleryItems}</div>
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(Gallery);
