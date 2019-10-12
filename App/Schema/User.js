const mongoose = require("mongoose");
const schema = mongoose.Schema;

const User = new schema({
    username: String,
    password: String,
    state: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("User", User);


