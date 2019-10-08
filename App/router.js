const express = require("express");
const router = express.Router();


router.get("/", (req,res) => {
    res.send(
        "API: Works!");
});

router.post("/new-task", (req,res) => {
    res.send("title: "+req.param.)
})

module.exports = router;