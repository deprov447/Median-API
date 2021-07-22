const graphql = require("graphql");

const { BlogType } = require("./blog");
const { AuthorType } = require("./author");

const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQueyType",
  fields: {
    blog: {
      type: BlogType,
      args: { id: { type: graphql.GraphQLID } },
    },
    author: {
      type: AuthorType,
      args: { id: { type: graphql.GraphQLID } },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});
