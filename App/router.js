//Dependencies
const express = require("express");
const bodyparser = require("body-parser");
const router = express.Router();
const User = require("./Schema/User.js");
const cors = require("cors");
const morgan = require("morgan");
require("colors");

//Middlewares
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({
    extended: true
}))
router.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    exposedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    credentials: true
  }));

router.use(morgan("dev"), (req, res, next) => {
    console.log("New Connection".yellow);
    next();
});

//Routes
router.get("/", cors(), (req, res) => {
    res.send("API Works!");
});

router.get("/users", cors(), async (req, res) => {   
    const users = await User.find({})
    res.json(users);
});

router.post("/confirm-user", cors(), async (req, res) => {
    //if user exits or not
    new User({username: req.body.username, password: req.body.password})
    found = await User.findOne({username: req.body.username, password: req.body.password})
    if(found == null){
         console.log("This user do not exist".cyan)
         res.json({'exits': false} )
    } else {
        await User.findOneAndUpdate({username: req.body.username, password: req.body.password}, {state: true})
        console.log("This account exists: ".cyan + found)
        res.json({"exits": true, "user": found})
        console.log(found)
    }
})


router.post("/create-account", cors(), async (req, res) => {
    user = new User({username: req.body.username, password: req.body.password})
    found = await User.findOne({username: req.body.username, password: req.body.password})
    if (found) { 
        console.log("There is an user with that data")
        res.json({already: true}) 
    }  
    else {
        await user.save()
        console.log("User created")
        res.json({already: false})
    }
})

module.exports = router;