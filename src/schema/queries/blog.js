const graphql = require("graphql");

const { BlogType } = require("../types/blog");

const Blog = require("../../model/blog");

var blog = {
  type: BlogType,
  args: { id: { type: graphql.GraphQLID } },
  resolve(parent, args) {
    return Blog.findById(args.id);
  },
};

module.exports = { blog };
