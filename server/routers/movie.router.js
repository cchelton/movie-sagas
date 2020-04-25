const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//  get all movies and their genres
router.get("/all", (req, res) => {
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

router.put("/edit", (req, res) => {
  //  id is a required query param
  if (req.query.id) {
    // expects body object as { title: "Scott Pilgrim", description: "lorem ipsum" }
    const title = req.body.title;
    const description = req.body.description;
    const queryText = `UPDATE movies
    SET "title" = '$1',
        "description" = '$2'
    WHERE "id" = $3;
    `;
    const queryParams = [title, description, req.query.id];

    pool
      .query(queryText, queryParams)
      .then((response) => {
        res.sendStatus(200); //  send 200 if updated
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500); //  send 500 if server error
      });
  } else {
    res.sendStatus(400); //  send 400 if missing params
  }
});
module.exports = router;
