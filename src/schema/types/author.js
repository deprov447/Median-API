const graphql = require("graphql");

const AuthorType = new graphql.GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
    image: { type: graphql.GraphQLString },
    // following: { type: graphql.GraphQLList },
  }),
});

module.exports = {
  AuthorType,
};
