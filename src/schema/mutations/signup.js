const graphql = require("graphql");
const bcrypt = require("bcrypt");
const { rateLimiter } = require("../limiter");

const User = require("../../model/user");
const { UserType } = require("../types/userType");

var signup = {
  type: UserType,
  args: {
    username: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
  },
  async resolve(parent, args, context, info) {
    await rateLimiter(parent, args, context, info);
    if (context.userData.username != "admin") return;

    console.log(`Adding User with details`, args);
    return bcrypt.hash(args.password, 12).then((hash) => {
      let userTemp = new User({
        username: args.username,
        email: args.email,
        password: hash,
      });
      return userTemp.save().then((data) => {
        return data;
      });
    });
  },
};

module.exports = signup;
