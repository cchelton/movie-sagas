import React from "react";
import { withRouter } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";
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
    <Paper className="GalleryItemContainer">
      <img
        className="GalleryItemImg"
        onClick={(event) => handleClick(event, id)}
        src={poster}
        alt={title}
      />
      <Typography variant="h4" component="h4" className="GalleryItemTitle">
        {title}
      </Typography>
      <Typography
        variant="body1"
        component="p"
        className="GalleryItemDescription"
      >
        {description}
      </Typography>
    </Paper>
  );
}

export default withRouter(GalleryItem);
