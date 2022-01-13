const { ApolloServer } = require('apollo-server-express')
// var { RootQuery } = require("./queries/rootQuery");
// var { RootMutation } = require("./mutations/rootMutation");

var RootType = require("./schema/types/rootType")
const resolvers = require("./schema/resolvers")

const server = new ApolloServer({
    playground: false,
    typeDefs: RootType,
    resolvers: resolvers,
})


// module.exports = new graphql.GraphQLSchema({
//     typeDef: RootType,
//     query: RootQuery,
//     // mutation: RootMutation,
// });

const startApolloServer = async (app) => {
    await server.start();
    server.applyMiddleware({
        app
    });
    console.log(`Apollo server online at ${server.graphqlPath}`)
}

module.exports = startApolloServer