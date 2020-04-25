import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function GalleryItem(props) {
  const title = props.item.title;
  const poster = props.item.poster;
  return (
    <Card>
      <CardContent>
        <img src={poster} alt={title} title={title} />
        <Typography variant="title">{title}</Typography>
      </CardContent>
    </Card>
  );
}

export default GalleryItem;
