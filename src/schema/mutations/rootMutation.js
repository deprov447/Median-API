const graphql = require("graphql");

const addAuthor = require("./addAuthor");
const addBlog = require("./addBlog");
const deleteAuthor = require("./deleteAuthor");
const deleteBlog = require("./deleteBlog");
const editAuthor = require("./editAuthor");
const editBlog = require("./editBlog");
const signup = require("./signup");

const RootMutation = new graphql.GraphQLObjectType({
  name: "RootMutation",
  description: `
    Mutations require an authentic JWT token in HTTP-HEADERS
  `,
  fields: {
    addAuthor: addAuthor,
    addBlog: addBlog,
    editAuthor: editAuthor,
    editBlog: editBlog,
    deleteAuthor: deleteAuthor,
    deleteBlog: deleteBlog,
    signup: signup,
  },
});

module.exports = { RootMutation };
