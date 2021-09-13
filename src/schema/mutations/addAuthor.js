const graphql = require("graphql");

const Author = require("../../model/author");
const { AuthorType } = require("../types/authorType");

var addAuthor = {
  type: AuthorType,
  args: {
    name: { type: graphql.GraphQLString },
    image: { type: graphql.GraphQLString },
    about: { type: graphql.GraphQLString },
    following: { type: new graphql.GraphQLList(graphql.GraphQLString) },
    blogs: { type: new graphql.GraphQLList(graphql.GraphQLString) },
  },
  resolve(parent, args) {
    console.log(`Adding author with details`, args);
    let authorTemp = new Author({
      name: args.name,
      image: args.image,
      about: args.about,
      following: args.following,
      blogs: args.blogs,
    });
    return authorTemp.save();
  },
};

module.exports = addAuthor;
