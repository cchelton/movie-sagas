const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

module.exports = router;

router.get("/", (req, res) => {
  let queryText = `SELECT * FROM movies JOIN movie_genres ON movies.id = movie_genres.movie_id JOIN genres ON genres.id = movie_genres.genre_id ORDER BY movie_genres.movie_id ASC;`;
  //  default case for query, no params

  // one query param -> id  = table movies_genres movie_id value.
  if (req.query.id) {
    // if there is a query param for the movie id, find it
    queryText = `SELECT * FROM movies JOIN movie_genres ON movies.id = movie_genres.movie_id JOIN genres ON genres.id = movie_genres.genre_id WHERE movies.id = $1;`;

    pool
      .query(queryText, [req.query.id])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.warn("@movies/all", err);
        res.sendStatus(500);
      });
  } else {
    // if not get everything
    pool
      .query(queryText, [])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.warn("@movies/all", err);
        res.sendStatus(500);
      });
  }
});
