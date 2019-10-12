//Dependencies
const express = require("express");
const router = require("./App/router.js")
const moongoose = require("mongoose");
require("colors");

//Server
const app = express();

//Settings
app.set("appName","Hi Backend")

//Middlewares
app.use(router);

//Database
moongoose.connect("mongodb://localhost:27017/Hi") 
  .then(db => console.log("DB connected!".green))
  .catch(err => console.log("An error occurred".red))

//Server Settings
app.listen(8000, (err) => {
    if(!err)console.log("Server on 8000 port".green)
    else{console.log("An error has ocurred, Trying...".red)}
})
        