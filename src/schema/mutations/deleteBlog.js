const graphql = require("graphql");
const { rateLimiter } = require("../limiter");

const Blog = require("../../model/blog");

const deleteBlog = {
  type: graphql.GraphQLBoolean,
  args: {
    id: { type: graphql.GraphQLID },
  },
  description: `
    Deletes a blog
  `,
  async resolve(parent, args, context, info) {
    await rateLimiter(parent, args, context, info);
    if (context.authorized == false) return;

    Blog.deleteOne(
      {
        _id: args.id,
      },
      (err, delObject) => {
        if (err) console.log(err);
        else {
          console.log(`Blog ${args.id} deleted`);
        }
      }
    );
  },
};

module.exports = deleteBlog;
