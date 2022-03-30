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

// Returns all of the people in our database
module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(people => {
            //console.log(people); // Logging is option but immensely helpful for debugging
            response.json(people);
        })
        .catch(err => {
            console.log(err);
            response.json(err);
        })
}

// Returns one person based on an ID
module.exports.getPerson = (request, response) => {
    Person.findOne({_id: request.params.id})
        .then((person) => {
            //console.log(person);
            response.json(person);
        })
        .catch((err) => {
            console.log(err);
            response.json(err);
        })
}

// Updates the person document with the specific ID
module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then((updatedPerson) => {
            //console.log(updatedPerson);
            response.json(updatedPerson);
        })
        .catch((err) => {
            console.log(err);
            response.json(err);
        })
}