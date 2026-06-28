const express = require("express");
// creating router reference. 
const router = express.Router();

const controller = require("../controller/loginController");

router.post("/signUp", controller.signUp);

router.post("/signIn",controller.signIn)

module.exports = router;