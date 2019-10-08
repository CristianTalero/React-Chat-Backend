const express = require("express");
const morgan = require("morgan");
const router = require("./App/router.js")
const colors = require("colors");
const path = require("path");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//Settings
app.set("appName","Hi Backend")

//Middlewares
app.use(router);
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}))

mongoose.connect

app.listen(8000, (err) => {
    if(!err)console.log("Server on 8000 port".green)
    else{console.log("An error has ocurred, Trying...".red)}
})
        