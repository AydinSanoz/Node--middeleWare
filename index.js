const express = require("express");
require("dotenv").config();
const port = process.env.port || 5001;
const host = "localhost";
const app = express();
//middleware
app.use((req, res, next) => {
  console.log("middleware: 1");
  // some jobs
  next();
});
app.use((req, res, next) => {
  console.log("middleware: 2");
  next();
});
app.use((req, res, next) => {
  console.log("middleware: 3");
  if (true) {
    res.send("OK");
  }
});
app.get("/user", (req, res) => {});
app.listen(port, host, () => {
  console.log("I'm listening on http://%s:%s", host, port);
});