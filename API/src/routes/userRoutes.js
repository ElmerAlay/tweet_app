const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.get);
router.get("/getUser", userController.getOne);
router.post("/", userController.insert);

module.exports = router;