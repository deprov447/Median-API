const graphql = require("graphql");

const Author = require("../../model/author");

const deleteAuthor = {
  type: graphql.GraphQLBoolean,
  args: {
    id: { type: graphql.GraphQLID },
  },
  resolve(parent, args, context) {
    if (context.authorized == false) return;
    console.log(args.id);
    Author.deleteOne(
      {
        _id: args.id,
      },
      (err, delObject) => {
        if (err) console.log(err);
        else {
          console.log(`Author ${args.id} deleted`);
        }
      }
    );
  },
};

module.exports = deleteAuthor;
