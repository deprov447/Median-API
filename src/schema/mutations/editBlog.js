const graphql = require("graphql");
const { BlogType } = require("../types/blog");
const Blog = require("../../model/blog");

const editBlog = {
  type: BlogType,
  args: {
    id: { type: graphql.GraphQLID },
    authorID: { type: graphql.GraphQLID },
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
  },
  resolve(parent, args) {
    var updatedObject = {};
    Object.keys(args).map((item) => {
      if (args[item] != undefined) updatedObject[item] = args[item];
    });
    return Blog.updateOne({ _id: args.id }, updatedObject);
  },
};

module.exports = editBlog;
