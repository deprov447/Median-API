const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: String,
  image: String,
  about: String,
  //   following: [String]
});

module.exports = mongoose.model("Author", authorSchema);
