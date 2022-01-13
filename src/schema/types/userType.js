// const graphql = require("graphql");

// const UserType = new graphql.GraphQLObjectType({
//   name: "User",
//   fields: () => {
//     return {
//       username: { type: graphql.GraphQLString },
//       email: { type: graphql.GraphQLString },
//     };
//   },
// });

const { gql } = require("apollo-server-express")

const UserType = gql`
    type User {
        username: String,
        email: String
    }
`

exports.UserType = UserType;
