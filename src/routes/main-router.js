const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controller");

router.get("/", mainController.home);
router.get("/login" , mainController.login);
router.get("/register", mainController.register);

const productsRouter = require("./products-router");
router.use("/products", productsRouter);

module.exports = router;