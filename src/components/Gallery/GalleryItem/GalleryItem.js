import React from "react";
import "./GalleryItem.css";

function GalleryItem(props) {
  const title = props.item.title;
  const poster = props.item.poster;
  const description = props.item.description;

  return (
    <div className="GalleryItemContainer">
      <img className="GalleryItemImg" src={poster} alt={title} />
      <h3 className="GalleryItemTitle">{title}</h3>
      <p className="GalleryItemDescription">{description}</p>
    </div>
  );
}

export default GalleryItem;
