const graphql = require("graphql");
const { rateLimiter } = require("../limiter");

const { BlogType } = require("../types/blogType");

const Blog = require("../../model/blog");

var blog = {
  type: BlogType,
  args: { id: { type: graphql.GraphQLID } },
  async resolve(parent, args, context, info) {
    await rateLimiter(parent, args, context, info);
    console.log(`Querying blog ${args.id}`);
    return Blog.findById(args.id);
  },
};

module.exports = { blog };
