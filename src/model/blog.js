const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  authorID: String,
  publishedIn: String,
  title: String,
  readTime: Number,
  date: Date,
  isStarred: Boolean,
  tags: [String],
  content: String,
  claps: Number,
  tweets: Number,
  rank: Number,
});

module.exports = mongoose.model("Blog", blogSchema);
