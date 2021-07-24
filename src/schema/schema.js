const graphql = require("graphql");

var { RootQuery } = require("./queries/rootQuery");
var { RootMutation } = require("./mutations/rootMutation");

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
