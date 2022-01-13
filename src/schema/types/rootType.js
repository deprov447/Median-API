const { gql } = require("apollo-server-express")

const { AuthorType } = require("./authorType")
const { BlogType } = require("./blogType")
const { TokenType } = require("./tokenType")
const { UserType } = require("./userType")

const QueryType = gql`
    type Query {
        type RootQuery {
            author: Author
            blog: Blog
            blogsByRank: [Blog]
            login: Token
            randomBlog: Blog
        }
    }
`

module.exports = [AuthorType, BlogType, TokenType, UserType, QueryType]