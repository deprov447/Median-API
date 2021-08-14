const graphql = require("graphql");

const { BlogType } = require("../types/blog");

const Blog = require("../../model/blog");

var blogsByRank = {
  type: new graphql.GraphQLList(BlogType),
  args: { num: { type: graphql.GraphQLInt } },
  async resolve(parent, args) {
    console.log(`Querying blogsByRank ${args.num}`);
    var result = [];
    for (let i = 1; i <= args.num; i++) {
      const item = await Blog.findOne({ rank: i });
      result.push(item);
    }
    // console.log(result);
    return result;
  },
};

module.exports = { blogsByRank };
