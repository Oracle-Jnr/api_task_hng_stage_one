const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors({ origin: true }));

app.get("*", (req, res) => {
  res.status(404).send("No route here");
});

module.exports = app;
