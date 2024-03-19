// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productsController = require("../controllers/productsController");
// GET ALL PRODUCTS
router.get("/", productsController.index);

//CREATE
router.get("/create/", productsController.create);
router.post("/", productsController.store);

//GET ONE PRODUCT
router.get("/:id/", productsController.detail);

module.exports=router;