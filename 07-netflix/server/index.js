const express = require("express");
const movies = require("./movies.json");
const app = express();

app.get("/", (req, res) => {
  return res.send("HELLO WORLD");
});

app.get("/movies/list", (req, res) => {
  return res.send(movies);
});

app.listen(8080, () => {
  console.log("Now listening on PORT 8080");
});
