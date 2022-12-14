const express = require("express");
const router = express.Router();
const { signUp,login ,search ,getMsg} = require("../controller/userController");
const { sendOTP ,getUserById,savename,checkName} = require("../controller/otpController");


router.post('/signup/:otp', signUp);
router.post('/searchUser/:username', search);
router.get("/getMsg/:currentuser/:username", getMsg);
router.post('/sendOTP/:otp',sendOTP);
router.post('/username', signUp);
router.post('/login',login);
// router.get("/:id", getName);
router.get("/getUserById/:userId",getUserById);
router.put("/savename/:userId",savename);
router.get("/checkName/:name",checkName);
module.exports = router;