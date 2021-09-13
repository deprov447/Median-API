const express = require("express"),
  { graphqlHTTP } = require("express-graphql"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  dotenv = require("dotenv"),
  jwt = require("jsonwebtoken");

const schema = require("./schema/schema");

const app = express();
app.use(cors());
dotenv.config();

mongoose.connect(process.env.DB_ADDR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log(`Connected to Online DB at ${process.env.DB_ADDR}`);
});

var authContext = {
  authorized: false,
  userData: {},
};

var userAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  try {
    var decoded = jwt.verify(token, process.env.SECRET);
    authContext["authorized"] = true;
    authContext["userData"] = decoded;
  } catch (err) {
    console.log("User Not Verified");
  }
  next();
};

app.use(userAuth);

app.use(
  "/gql",
  graphqlHTTP({
    schema: schema,
    context: authContext,
    graphiql: false,
  })
);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Median server running on ${port}/gql`);
});
