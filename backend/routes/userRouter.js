const express = require("express");
const router = express.Router();
const { signUp } = require("../controller/userController");
// console.log("fine");
// router.post("/login", checkCred);
router.post("/signup", signUp);
// router.get("/:id", getName);

module.exports = router;