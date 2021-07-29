const graphql = require("graphql");

const { AuthorType } = require("../types/author");

const Author = require("../../model/author");

var author = {
  type: AuthorType,
  args: { id: { type: graphql.GraphQLID } },
  resolve(parent, args) {
    console.log(`Querying author ${args.id}`);
    return Author.findById(args.id);
  },
};

module.exports = { author };
