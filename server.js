const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify("Hi Client!"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
