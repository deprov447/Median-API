const graphql = require("graphql");
const { rateLimiter } = require("../limiter");

const Author = require("../../model/author");
const { AuthorType } = require("../types/authorType");

const editAuthor = {
  type: AuthorType,
  args: {
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
    image: { type: graphql.GraphQLString },
    about: { type: graphql.GraphQLString },
    following: { type: new graphql.GraphQLList(graphql.GraphQLString) },
    blogs: { type: new graphql.GraphQLList(graphql.GraphQLString) },
  },
  description: `
    Edits an author
  `,
  async resolve(parent, args, context, info) {
    await rateLimiter(parent, args, context, info);
    if (context.authorized == false) return;

    var updatedObject = {};
    Object.keys(args).map((item) => {
      if (args[item] != undefined) updatedObject[item] = args[item];
    });
    console.log(`Author ${args.id} updated with`, updatedObject);
    return Author.updateOne({ _id: args.id }, updatedObject);
  },
};

module.exports = editAuthor;
