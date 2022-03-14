const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    type: {
        type: String
    },
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;