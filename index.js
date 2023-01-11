const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.get("/tathagata", (req, res) => {
  res.send("Tathagata");
});

app.post("/data", (req, res) => {
  let a = req.body.a;
  let b = req.body.b;

  res.send(a + " " + b);
});
app.listen(8080, () => console.log("Done"));
