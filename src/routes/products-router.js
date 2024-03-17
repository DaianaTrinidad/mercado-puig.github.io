// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

router.get("/", productsController.index);
//CREATE
router.get("/create/", productsController.create);
router.post("/", productsController.store);

module.exports=router;