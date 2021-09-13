const graphql = require("graphql");
const bcrypt = require("bcrypt");

const User = require("../../model/user");
const { UserType } = require("../types/userType");

var signup = {
  type: UserType,
  args: {
    username: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
  },
  resolve(parent, args) {
    console.log(`Adding User with details`, args);
    return bcrypt.hash(args.password, 12).then((hash) => {
      let userTemp = new User({
        username: args.username,
        email: args.email,
        password: hash,
      });
      return userTemp.save().then((data)=>{
        delete data[password];
        return data
      });
    });
  },
};

module.exports = signup;
