const Author = require("../models/author.model");

module.exports = {
    createAuthor: (request, response) => {
        Author.create(request.body)
            .then((author) => {
                response.json(author);
            })
            .catch((err) => {
                console.log(err);
                response.status(400).json(err);
            })
    },

    getAllAuthors: (request, response) => {
        Author.find({})
            .then((authors) => {
                response.json(authors);
            })
            .catch((err) => {
                console.log(err);
                response.status(400).json(err);
            })
    },

    getOneAuthor: (request, response) => {
        Author.findOne({_id: request.params.id})
            .then((author) => {
                response.json(author);
            })
            .catch((err) => {
                console.log(err);
                response.status(400).json(err);
            })
    },

    updateAuthor: (request, response) => {
        Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
            .then((author) => {
                response.json(author);
            })
            .catch((err) => {
                console.log(err);
                response.status(400).json(err);
            })
    },

    deleteAuthor: (request, response) => {
        Author.deleteOne({_id: request.params.id})
            .then((product) => {
                response.json(product);
            })
            .catch((err) => {
                console.log(err);
                response.json(err);
            })
    }
}