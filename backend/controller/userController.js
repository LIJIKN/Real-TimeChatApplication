const User = require("../models/user");

const signUp = async (req, res) => {

    // console.log("ok")
  try {
    console.log("try");
    const newUser = await User.create({
      name: req.body.item.username,
      email: req.body.item.userEmail,
      passwordHash: req.body.item.password,
      confpassword: req.body.item.confpassword,
    });

    console.log(newUser)

    res.status(201).send(newUser);
  } catch (err) {
    res.status(403).send("Cannot Create an User");
  }
};
module.exports = {signUp};