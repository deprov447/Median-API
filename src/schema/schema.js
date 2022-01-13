const graphql = require("graphql");

var { RootQuery } = require("./queries/rootQuery");
var { RootMutation } = require("./mutations/rootMutation");
var RootType = require("./types/rootType")

module.exports = new graphql.GraphQLSchema({
  typeDef: RootType,
  query: RootQuery,
  // mutation: RootMutation,
});
