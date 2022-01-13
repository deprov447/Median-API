// const graphql = require("graphql");

const { author } = require("./author");
const { blog } = require("./blog");
const { blogsByRank } = require("./blogsByRank");
const { login } = require("./login");
const { randomBlog } = require("./randomBlog");

// const RootQuery = new graphql.GraphQLObjectType({
//   name: "RootQuery",
//   fields: {
//     blog: blog,
//     author: author,
//     blogsByRank: blogsByRank,
//     randomBlog: randomBlog,
//     login: login,
//   },
// });

const RootQuery = {
  blog,
  author,
  blogsByRank,
  login,
  randomBlog,
}

module.exports = { RootQuery };
