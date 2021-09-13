const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: String,
});

module.exports = mongoose.model("User", userSchema);