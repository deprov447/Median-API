const graphql = require("graphql");

const { BlogType } = require("../types/blog");

const Blog = require("../../model/blog");

var addBlog = {
  type: BlogType,
  args: {
    title: { type: graphql.GraphQLString },
    author: { type: graphql.GraphQLString },
    published: { type: graphql.GraphQLString },
    date: { type: graphql.GraphQLString },
    readTime: { type: graphql.GraphQLInt },
    tags: { type: graphql.GraphQLList(graphql.GraphQLString) },
    rank: { type: graphql.GraphQLInt },
    isStarred: { type: graphql.GraphQLBoolean },
    content: { type: graphql.GraphQLString },
  },
  resolve(parent, args) {
    var AuthorName = "someAuthor";
    let blogTemp = new Blog({
      title: args.title,
      author: AuthorName, //Todo
      published: args.published,
      date: args.date,
      readTime: args.readTime,
      tags: args.tags,
      rank: args.rank,
      isStarred: args.isStarred,
      content: args.content,
    });
    return blogTemp.save();
  },
};

module.exports = addBlog;
