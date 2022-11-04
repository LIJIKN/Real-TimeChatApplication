const express = require("express");
const router = express.Router();
const { signUp } = require("../controller/userController");
const { sendOTP ,getUserById} = require("../controller/otpController");


router.post('/signup/:otp', signUp);
router.post('/sendOTP/:otp',sendOTP);
router.post('/username', signUp);
// router.get("/:id", getName);
router.get("/getUserById/:userId",getUserById);

module.exports = router;''