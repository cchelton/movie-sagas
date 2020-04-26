import React from "react";
import { Typography } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <header className="HeaderContainer">
      <Typography color="inherit" variant="h2" component="h1">
        Movie Sagas
      </Typography>
    </header>
  );
}

export default Header;
