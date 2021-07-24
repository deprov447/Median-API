const graphql = require("graphql");
const Author = require("../../model/author");

const BlogType = new graphql.GraphQLObjectType({
  name: "Blog",
  fields: () => ({
    id: { type: graphql.GraphQLID },
    title: { type: graphql.GraphQLString },
    author: {
      type: graphql.GraphQLString,
      resolve(parent, args) {
        return Author.find({
          books: parent.id,
        });
      },
    }, //Todo
    published: { type: graphql.GraphQLString },
    date: { type: graphql.GraphQLString },
    readTime: { type: graphql.GraphQLInt },
    tags: { type: graphql.GraphQLList(graphql.GraphQLString) },
    rank: { type: graphql.GraphQLInt },
    isStarred: { type: graphql.GraphQLBoolean },
    content: { type: graphql.GraphQLString },
  }),
});

module.exports = {
  BlogType,
};
