const mongoose = require("mongoose");

// Create a model of a Person in our database
const PersonSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String}
}, {timestamps: true});

module.exports = mongoose.model("Person", PersonSchema);