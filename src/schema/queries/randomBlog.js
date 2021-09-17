const { BlogType } = require("../types/blogType");
const { rateLimiter } = require("../limiter");

const Blog = require("../../model/blog");

var randomBlog = {
  type: BlogType,
  async resolve(parent, args, context, info) {
    await rateLimiter(parent, args, context, info);
    console.log(`Random Blog Query`);
    return Blog.findOne({});
  },
};

module.exports = { randomBlog };
