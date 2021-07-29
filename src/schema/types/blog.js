const graphql = require("graphql");
const Author = require("../../model/author");

const BlogType = new graphql.GraphQLObjectType({
  name: "Blog",
  fields: () => {
    const { AuthorType } = require("./author");
    return {
      id: { type: graphql.GraphQLID },
      author: {
        type: AuthorType,
        resolve(parent, args) {
          return Author.findById(parent.authorID);
        },
      }, 
      publishedIn: { type: graphql.GraphQLString },
      title: { type: graphql.GraphQLString },
      readTime: { type: graphql.GraphQLInt },
      date: { type: graphql.GraphQLString },
      isStarred: { type: graphql.GraphQLBoolean },
      tags: { type: graphql.GraphQLList(graphql.GraphQLString) },
      content: { type: graphql.GraphQLString },
      claps: { type: graphql.GraphQLInt },
      tweets: { type: graphql.GraphQLInt },
      rank: { type: graphql.GraphQLInt },
    };
  },
});

exports.BlogType = BlogType;
