const graphql = require("graphql");

const addAuthor = require("./addAuthor");
const addBlog = require("./addBlog");

const RootMutation = new graphql.GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    addAuthor: addAuthor,
    addBlog: addBlog,
  },
});

module.exports = { RootMutation };
