require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const vehicles = require("./vehicles.json");

const port = process.env.PORT || 6969;
app.use(cors());

app.use("/vehicles", express.static(path.join(__dirname, "./vehicles")));
app.use("/images", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.send("Api is online !");
});

app.get("/vehicles", (req, res) => {
  res.json(vehicles);
});

app.listen(port, () => {
  console.info(`Api is running on http://localhost:${port}/`);
});
