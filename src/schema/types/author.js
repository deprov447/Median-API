const graphql = require("graphql");
const author = require("../../model/author");
const blog = require("../../model/blog");

const AuthorType = new graphql.GraphQLObjectType({
  name: "Author",
  fields: () => {
    const { BlogType } = require("./blog");
    return {
      id: { type: graphql.GraphQLID }, 
      name: { type: graphql.GraphQLString },
      image: { type: graphql.GraphQLString },
      about: { type: graphql.GraphQLString },
      following: {
        type: new graphql.GraphQLList(AuthorType),
        resolve(parent, args) {
          var followingList = parent.following.map((id) => {
            return author.findById(id);
          });
          return followingList;
        },
      },
      blogs: {
        type: new graphql.GraphQLList(BlogType),
        resolve(parent, args) {
          var blogList = parent.blogs.map((id) => {
            return blog.findById(id);
          });
          return blogList;
        },
      },
    };
  },
});

exports.AuthorType = AuthorType;
