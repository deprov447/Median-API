const graphql = require("graphql");

const { blog } = require("./blog");
const { author } = require("./author");
const { blogsByRank } = require("./blogsByRank");
const { randomBlog } = require("./randomBlog");

const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    blog: blog,
    author: author,
    blogsByRank: blogsByRank,
    randomBlog: randomBlog
  },
});

module.exports = { RootQuery };
