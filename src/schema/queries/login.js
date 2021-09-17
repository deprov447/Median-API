const graphql = require("graphql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { rateLimiter } = require("../limiter");

const { TokenType } = require("../types/tokenType");
const User = require("../../model/user");

var login = {
  type: TokenType,
  args: {
    email: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
  },
  async resolve(parent, args, context, info) {
    await rateLimiter(parent, args, context, info);
    
    console.log(`Login User with details`, args);
    return User.findOne({ email: args.email }).then((user) => {
      if (!user)
        return {
          isRegistered: false,
          isPassCorrect: false,
          token: null,
        };
      return bcrypt.compare(args.password, user.password).then((isValid) => {
        if (!isValid)
          return {
            isRegistered: true,
            isPassCorrect: false,
            token: null,
          };
        var tokenGenerated = jwt.sign(
          { username: user.username },
          process.env.SECRET,
          { expiresIn: "1y" }
        );
        return {
          isRegistered: true,
          isPassCorrect: true,
          token: tokenGenerated,
        };
      });
    });
  },
};

module.exports = { login };
