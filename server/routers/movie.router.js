const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

module.exports = router;

router.get("/all", (req, res) => {
  const queryText = `SELECT * FROM movies JOIN movie_genres ON movies.id = movie_genres.movie_id JOIN genres ON genres.id = movie_genres.genre_id ORDER BY movie_genres.id ASC;`;

  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn("@movies/all", err);
      res.sendStatus(500);
    });
});
