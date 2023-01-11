const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.get("/tathagata", (req, res) => {
  res.send("Tathagata");
});

app.listen(8080, () => console.log("Done"));
