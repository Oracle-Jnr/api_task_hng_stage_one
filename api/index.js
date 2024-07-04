const express = reqire("express");
const cors = requie("cors");
const app = express();
const port = 8000;

app.use(cors());

app.get("*", (req, res) => {
  res.status(404).send("Resource not fond");
});

module.exports = app;
