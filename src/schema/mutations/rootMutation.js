const graphql = require("graphql");

const addAuthor = require("./addAuthor");
const addBlog = require("./addBlog");
const editAuthor = require("./editAuthor");
const editBlog = require("./editBlog");

const RootMutation = new graphql.GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    addAuthor: addAuthor,
    addBlog: addBlog,
    editAuthor: editAuthor,
    editBlog: editBlog,
  },
});

module.exports = { RootMutation };
