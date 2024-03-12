const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  passwordHash: String,
  resetpassword: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: Date,
}, { versionKey: false });

const User = mongoose.model('User', userSchema,'logen');

module.exports = User;
