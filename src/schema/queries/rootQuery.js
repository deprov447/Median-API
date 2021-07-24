const graphql = require("graphql");

const { blog } = require("./blog");
const { author } = require("./author");

const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    blog: blog,
    author: author,
  },
});

module.exports = { RootQuery };
