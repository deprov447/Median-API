const graphql = require("graphql");
const { rateLimiter } = require("../limiter");

const { AuthorType } = require("../types/authorType");

const Author = require("../../model/author");

var author = {
  type: AuthorType,
  args: { id: { type: graphql.GraphQLID } },
  async resolve(parent, args, context, info) {
    await rateLimiter(parent, args, context, info);
    console.log(`Querying author ${args.id}`);
    return Author.findById(args.id);
  },
};

module.exports = { author };
