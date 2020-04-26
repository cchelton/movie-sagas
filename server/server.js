const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

/** ---------- ROUTES ---------- **/

const movieRouter = require("./routers/movie.router");
app.use("/api/movies", movieRouter);

const genreRouter = require("./routers/genre.router");
app.use("/api/genres", genreRouter);

const movieGenresRouter = require("./routers/movieGenres.router");
app.use("/api/movieGenres", movieGenresRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log("Listening on port: ", port);
});
