const { BlogType } = require("../types/blogType");
const { rateLimiter } = require("../limiter");

const Blog = require("../../model/blog");

var randomBlog = {
  type: BlogType,
  description: `
    Returns a random blog.
  `,
  async resolve(parent, args, context, info) {
    await rateLimiter(parent, args, context, info);
    console.log(`Random Blog Query`);
    var count = await Blog.countDocuments();
    var random = Math.floor(Math.random() * count);
    return Blog.findOne().skip(random);
  },
};

module.exports = { randomBlog };
