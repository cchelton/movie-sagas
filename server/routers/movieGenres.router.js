const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//  get all the movies and their genres
router.get("/", (req, res) => {
  let queryText = `select movies.id, movies.title, movies.description, movies.poster, array_agg(genres.name) as genres from movies join movie_genres on movies.id = movie_genres.movie_id join genres on genres.id = movie_genres.genre_id GROUP BY movies.id ORDER BY movies.id ASC;`;
  //  default case for query, no params

  // one query param -> id  = table movies_genres movie_id value.
  if (req.query.id) {
    // if there is a query param for the movie id, find it
    queryText = `select movies.id, movies.title, movies.poster, movies.description, array_agg(genres.name) as genres from movies join movie_genres on movies.id = movie_genres.movie_id join genres on genres.id = movie_genres.genre_id WHERE movies.id = $1 GROUP BY movies.id;`;

    pool
      .query(queryText, [req.query.id])
      .then((response) => {
        res.send(response.rows[0]);
      })
      .catch((err) => {
        console.warn("@movieGenres/", err);
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
        console.warn("@movieGenres/", err);
        res.sendStatus(500);
      });
  }
});

module.exports = router;
