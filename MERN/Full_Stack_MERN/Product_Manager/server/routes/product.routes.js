const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products", ProductController.getAllProducts);
    app.get("/api/:id", ProductController.getOneProduct);
    app.put("/api/:id", ProductController.updateProduct);
    app.delete("/api/:id", ProductController.deleteProduct);
}