const graphql = require("graphql");

const TokenType = new graphql.GraphQLObjectType({
  name: "Token",
  fields: () => {
    return {
      isRegistered: { type: graphql.GraphQLBoolean },
      isPassCorrect: { type: graphql.GraphQLBoolean },
      token: { type: graphql.GraphQLString },
    };
  },
});

exports.TokenType = TokenType;
