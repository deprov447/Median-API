const graphql = require("graphql");
const { rateLimiter } = require("../limiter");

const { BlogType } = require("../types/blogType");

const Blog = require("../../model/blog");

// var blog = {
//   type: BlogType,
//   args: { id: { type: graphql.GraphQLID } },
//   description: `
//   Takens an ID and returns the corresponding blog.
//   `,
//   async resolve(parent, args, context, info) {
//     await rateLimiter(parent, args, context, info);
//     console.log(`Querying blog ${args.id}`);
//     return Blog.findById(args.id);
//   },
// };

const blog = async (parent, args, context, info) => {
  await rateLimiter(parent, args, context, info);
  console.log(`Querying blog ${args.id}`);
  return Blog.findById(args.id);
}

module.exports = { blog };
