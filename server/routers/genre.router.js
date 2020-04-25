const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//  get all the genres

router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "genres" ORDER BY "id" ASC;`;

  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("@/gallery/", err);
      res.sendStatus(500);
    });
});

module.exports = router;
