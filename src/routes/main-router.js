const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controller");

router.get("/", mainController.home);
router.get("/search", mainController.search);

const productsRouter = require("./products-router");
router.use("/products", productsRouter);

module.exports = router;