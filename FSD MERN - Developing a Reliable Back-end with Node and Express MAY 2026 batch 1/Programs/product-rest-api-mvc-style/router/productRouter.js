const express = require("express");
// creating router reference. 
const router = express.Router();

const controller = require("../controller/productController");

router.post("/create", controller.create);

router.get("/findAll", controller.findAll);

router.get("/findById/:id", controller.getById);

router.put("/update/:id", controller.update);

router.delete("/delete/:id", controller.deleteById);

module.exports = router;