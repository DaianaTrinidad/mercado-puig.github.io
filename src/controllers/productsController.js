productService= require("../services/productService");
const controller = {
    index: (req, res) => {
        // Do the magic
        const products = productService.getAllProducts();
        res.render("products", { products });
    },
    create: (req, res) => {
    res.render("product-create-form");
    },
   store: (req, res) => {
    //como es un post hay que hacer un redirect porque si pongo un render me va a volver a mandar el formulario-idempotente)
    //si pongo res.render (es en los get porque cada vez q va , va a renderizar lo mismo)
    const product = req.body;
    console.log(product);
    res.redirect("/products");
    },

};

module.exports= controller;