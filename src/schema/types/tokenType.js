// const graphql = require("graphql");

// const TokenType = new graphql.GraphQLObjectType({
//   name: "Token",
//   fields: () => {
//     return {
//       isRegistered: { type: graphql.GraphQLBoolean },
//       isPassCorrect: { type: graphql.GraphQLBoolean },
//       token: { type: graphql.GraphQLString },
//     };
//   },
// });

const { gql } = require('apollo-server-express')

const TokenType = gql`
    type Token {
      isRegistered: Boolean,
      isPassCorrect: Boolean,
      token: String
  }
`

exports.TokenType = TokenType;
