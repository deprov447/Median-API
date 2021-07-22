const graphql = require("graphql");

const BlogType = new graphql.GraphQLObjectType({
  name: "Blog",
  fields: () => ({
    id: { type: graphql.GraphQLID },
    title: { type: graphql.GraphQLString },
  }),
});

module.exports = {
    BlogType
}