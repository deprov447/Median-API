// const graphql = require("graphql");

// const Author = require("../../model/author");

// const BlogType = new graphql.GraphQLObjectType({
//   name: "Blog",
//   fields: () => {
//     const { AuthorType } = require("./authorType");
//     return {
//       id: { type: graphql.GraphQLID },
//       author: {
//         type: AuthorType,
//         resolve(parent, args) {
//           return Author.findById(parent.authorID);
//         },
//       },
//       publishedIn: { type: graphql.GraphQLString },
//       title: { type: graphql.GraphQLString },
//       readTime: { type: graphql.GraphQLInt },
//       date: { type: graphql.GraphQLString },
//       isStarred: { type: graphql.GraphQLBoolean },
//       tags: { type: graphql.GraphQLList(graphql.GraphQLString) },
//       content: { type: graphql.GraphQLString },
//       claps: { type: graphql.GraphQLInt },
//       tweets: { type: graphql.GraphQLInt },
//       rank: { type: graphql.GraphQLInt },
//     };
//   },
// });

const { gql } = require("apollo-server-express")

const BlogType = gql`
  type Blog {
    id: ID,
    # author: AuthorType,
    publishedIn: String,
    title: String,
    readTime: Int,
    date: String,
    isStarred: Boolean,
    tags: [String],
    content: String,
    claps: Int,
    tweets: Int,
    rank: Int,
  }
`

exports.BlogType = BlogType;
