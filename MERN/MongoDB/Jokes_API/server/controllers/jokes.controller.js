const Joke = require("../models/jokes.model");

const getAllJokes = (req, res) => {
    Joke.find()
        .then((jokes) => res.json(jokes))
        .catch((err) => console.log(err));
};

const getJokeById = (req, res) => {
    const { params } = req;
    Joke.findOne({ _id: params._id })
        .then((joke) => res.json(joke))
        .catch((err) => console.log(err));
};

const createJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
        .then((joke) => res.json(joke))
        .catch((err) => console.log(err));
};

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((joke) => res.json(joke))
        .catch((err) => console.log(err));
};

const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then((joke) => res.json(joke))
        .catch((err) => console.log(err));
};

module.exports = {
    getAllJokes,
    getJokeById,
    createJoke,
    updateJoke,
    deleteJoke,
};