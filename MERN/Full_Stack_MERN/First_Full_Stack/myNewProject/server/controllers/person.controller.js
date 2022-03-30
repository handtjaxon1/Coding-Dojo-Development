// Import our Person model
const Person = require("../models/person.model");

// Default message to display when visiting the index of our site
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

// Creates a new person and adds it to our person collection
module.exports.createPerson = (request, response) => {
    Person.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err));
}