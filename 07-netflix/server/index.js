const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("HELLO WORLD");
});

app.listen(8080, () => {
  console.log("Now listening on PORT 8080");
});
