const graphql = require("graphql");
const { rateLimiter } = require("../limiter");

const { BlogType } = require("../types/blogType");

const Blog = require("../../model/blog");

var blogsByRank = {
  type: new graphql.GraphQLList(BlogType),
  args: { num: { type: graphql.GraphQLInt } },
  description: `
    Returns a list of blogs within the provided rank.
  `,
  async resolve(parent, args, context, info) {
    await rateLimiter(parent, args, context, info);

    console.log(`Querying blogsByRank ${args.num}`);
    var result = [];
    for (let i = 1; i <= args.num; i++) {
      const item = await Blog.findOne({ rank: i });
      result.push(item);
    }
    return result;
  },
};

module.exports = { blogsByRank };
