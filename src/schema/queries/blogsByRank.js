const graphql = require("graphql");

const { BlogType } = require("../types/blog");

const Blog = require("../../model/blog");

var blogsByRank = {
  type: BlogType,
  args: { num: { type: graphql.GraphQLInt } },
  resolve(parent, args) {
    console.log(`Querying blogsByRank ${args.num}`);
    var result = [];
    for (let i = 1; i <= args.num; i++) {
      const item = Blog.find({ rank: i });
      console.log(item);
      result.push(item);
    }
    // console.log(result);
    return result;
  },
};

module.exports = { blogsByRank };
