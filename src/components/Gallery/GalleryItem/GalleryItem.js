import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import "./GalleryItem.css";

function GalleryItem(props) {
  const title = props.item.title;
  const poster = props.item.poster;
  return (
    <div>
      <img className="GalleryImg" src={poster} alt={title} />
      <p className="legend">{title}</p>
    </div>
  );
}

export default GalleryItem;
