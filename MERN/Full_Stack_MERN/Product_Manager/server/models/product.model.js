const mongoose = require("mongoose");

// Create a model of a Product in our database
const ProductSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);