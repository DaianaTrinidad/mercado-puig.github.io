const productService = require("../services/productService");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    // Do the magic
    const products = productService.getAllProducts();
    res.render("products", { products });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    const id = req.params.id;
    const product = productService.getFormattedProduct(id);
    res.render("detail", { product });
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    const product = {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: req.file ? req.file.filename : "default-image.png",
    };
    productService.createProduct(product);
    res.redirect("/products");
  },
  // Update - Form to edit
  edit: (req, res) => {
    const id = req.params.id;
    const product = productService.getProduct(id);
    res.render("product-edit-form", { product });
  },
  // Update - Method to update
  update: (req, res) => {
    const product = req.body;
    const id = req.params.id;
    const image = req.file
      ? req.file.filename
      : productService.getProduct(id).image;
    product.image = image;
    productService.updateProduct(id, product);
    res.redirect("/products");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    const id = req.params.id;
    productService.deleteProduct(id);
    res.redirect("/products");
  },
};

module.exports = controller;