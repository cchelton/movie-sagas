import React from "react";
import { withRouter } from "react-router-dom";
import "./GalleryItem.css";

function GalleryItem(props) {
  const title = props.item.title;
  const poster = props.item.poster;
  const description = props.item.description;
  const id = props.item.id;

  const handleClick = (event, id) => {
    props.history.push(`/details/${id}`); //  item.id is movie_genres.movie_id
  };

  return (
    <div className="GalleryItemContainer">
      <img
        className="GalleryItemImg"
        onClick={(event) => handleClick(event, id)}
        src={poster}
        alt={title}
      />
      <h3 className="GalleryItemTitle">{title}</h3>
      <p className="GalleryItemDescription">{description}</p>
    </div>
  );
}

export default withRouter(GalleryItem);
