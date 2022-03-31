const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.get("/api/authors", AuthorController.getAllAuthors);
    app.post("/api/authors", AuthorController.createAuthor);
    app.get("/api/:id", AuthorController.getOneAuthor);
    app.put("/api/:id", AuthorController.updateAuthor);
    app.delete("/api/:id", AuthorController.deleteAuthor);
}