const express = require("express");
const saveData = require("../controllers/saveData");
const PaginatedMovies = require("../controllers/PaginatedMovies");

const router = express.Router();

router.post("/uploadData", saveData);
router.get("/paginatedmovies", PaginatedMovies);
router.get("/", (req, res) => {
  res.send("Welcome to the Movies Pagination");
});

module.exports = router;
