const graphql = require("graphql");

const { BlogType } = require("../types/blog");

const Blog = require("../../model/blog");

var randomBlog = {
  type: BlogType,
  resolve(parent, args) {
    console.log(`Random Blog Query`);
    return Blog.findOne({});   
  },
};

module.exports = { randomBlog };
