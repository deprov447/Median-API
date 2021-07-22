const graphql = require("graphql");

const AuthorType = new graphql.GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
  }),
});

module.exports = {
    AuthorType
}