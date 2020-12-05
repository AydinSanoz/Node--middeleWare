app.use((req, res, next) => { //Authentication
    console.log("Auth");
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