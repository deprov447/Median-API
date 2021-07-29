const graphql = require("graphql");

const addAuthor = require("./addAuthor");
const addBlog = require("./addBlog");
const deleteAuthor = require("./deleteAuthor");
const deleteBlog = require("./deleteBlog");
const editAuthor = require("./editAuthor");
const editBlog = require("./editBlog");

const RootMutation = new graphql.GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    addAuthor: addAuthor,
    addBlog: addBlog,
    editAuthor: editAuthor,
    editBlog: editBlog,
    deleteAuthor: deleteAuthor,
    deleteBlog: deleteBlog,
  },
});

module.exports = { RootMutation };
