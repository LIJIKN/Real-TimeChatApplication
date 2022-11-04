const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  confpassword:{
    type: String,
    required: true,
  },
  otp:{
    type:Number,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now(),
  }
});

// exports.User = mongoose.model("User", userSchema);
// exports.userSchema = userSchema;

const User = mongoose.model('User', userSchema);
module.exports = User;