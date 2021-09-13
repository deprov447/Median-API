const graphql = require("graphql");

const Blog = require("../../model/blog");

const deleteBlog = {
  type: graphql.GraphQLBoolean,
  args: {
    id: { type: graphql.GraphQLID },
  },
  resolve(parent, args, context) {
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
