const express = require("express");
const path = require("path");
require("dotenv").config();
const port = process.env.port || 5001;
const host = "localhost";
const app = express();
//middleware
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.get("/", (req, res) => {
    res.render("index");
})
app.listen(port, host, () => {
    console.log("I'm listening on http://%s:%s", host, port);
})