const mongoose = require("mongoose");

// Create a model for an Author in our database
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must have 3 or more characters"]
    }
}, {timestamps: true});

module.exports = mongoose.model("Author", AuthorSchema);