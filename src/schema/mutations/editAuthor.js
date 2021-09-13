const graphql = require("graphql");

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
  resolve(parent, args) {
    var updatedObject = {};
    Object.keys(args).map((item) => {
      if (args[item] != undefined) updatedObject[item] = args[item];
    });
    console.log(`Author ${args.id} updated with`, updatedObject);
    return Author.updateOne({ _id: args.id }, updatedObject);
  },
};

module.exports = editAuthor;
