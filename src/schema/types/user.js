const graphql = require("graphql");

const UserType = new graphql.GraphQLObjectType({
  name: "User",
  fields: () => {
    return {
      username: { type: graphql.GraphQLString },
      email: { type: graphql.GraphQLString },
      password: { type: graphql.GraphQLString },
    };
  },
});

exports.UserType = UserType;