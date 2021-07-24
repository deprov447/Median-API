const graphql = require("graphql");

const { AuthorType } = require("../types/author");

const Author = require("../../model/author");

var addAuthor = {
  type: AuthorType,
  args: {
    name: { type: graphql.GraphQLString },
    image: { type: graphql.GraphQLString },
    about: { type: graphql.GraphQLString },
    // following: { type: graphql.GraphQLList },
  },
  resolve(parent, args) {
    let authorTemp = new Author({
      name: args.name,
      image: args.image,
      about: args.about,
      //   following: args.following,
    });
    return authorTemp.save();
  },
};

module.exports = addAuthor;
