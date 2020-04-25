import React from "react";

function GalleryItem(props) {
  const title = props.item.title;
  const poster = props.item.poster;
  return (
    <div>
      <img src={poster} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default GalleryItem;
