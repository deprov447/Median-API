const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  // author: mongoose.Schema.Types.ObjectId,
  author: String,
  published: String,
  date: Date,
  readTime: Number,
  tags: [String],
  rank: Number,
  isStarred: Boolean,
  content: String,
});

module.exports = mongoose.model("Blog", blogSchema);
