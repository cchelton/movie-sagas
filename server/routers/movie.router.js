const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//  get all the movies
router.get("/", (req, res) => {
  const queryParams = `SELECT * FROM MOVIES ORDER BY "id" ASC;`;

  pool
    .query(queryParams)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("@/movies", err);

      res.sendStatus(500);
    });
});

//  edit a movie's title/description
router.put("/edit", (req, res) => {
  //  id is a required query param
  if (req.query.id) {
    // expects body object as { title: "Scott Pilgrim", description: "lorem ipsum" }
    const title = req.body.title;
    const description = req.body.description;
    const queryText = `UPDATE movies
    SET "title" = $1,
        "description" = $2
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
