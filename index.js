const express = require("express");
require("dotenv").config();
var cookieParser = require ("cookie-parser")
const logger = require("morgan");
const port = process.env.port || 5001;
const host = "localhost";
const app = express();
//middleware
app.use(logger("dev"));


app.use((req, res, next) => { //Authentication
    console.log("Auth");
    console.log("Cookies: ", req.signedCookies);
    // some jobs
    res.isAuth = false;
    next();
  });
  app.use((req, res, next) => {
    console.log("Controller // db");
   if (res.isAuth) {
       console.log("Private data")
   } else {
       console.log("not auth")
   }
    next();
  });
  app.use((req, res, next) => {
    console.log("middleware: 3");
    if (true) {
      res.send("send");
    }
  });

  app.listen(port, ()=>{
      console.log("I am listenin on %s:%s",host,port)
  })