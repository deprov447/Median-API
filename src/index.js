const express = require("express"),
  { graphqlHTTP } = require("express-graphql"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  dotenv = require("dotenv");

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

app.use(
  "/gql",
  graphqlHTTP({
    schema: schema,
    graphiql: false,
  })
);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Median server running on ${port}/gql`);
});
