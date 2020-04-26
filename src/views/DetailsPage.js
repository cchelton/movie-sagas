import React from "react";
import { useParams } from "react-router-dom";

function DetailsPage(props) {
  const { id } = useParams();
  return (
    <div>
      <h2>Movie ID: {id}</h2>
    </div>
  );
}

export default DetailsPage;
