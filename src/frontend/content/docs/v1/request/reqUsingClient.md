---
title: "Using GraphQL Client"
date: 2021-09-21T14:47:02+05:30
draft: false
weight: 10
---

# Request Using GraphQL Client

You can send a GraphQL query or mutation using a GraphQL client. This is the best way to query and test your server. Most of them have an autocompletion feature which helps you ride through the schema.

GraphQL Playground helps in sending requests to the GraphQL server and facilitates the retrieval of data as well.

## Query with variables
Most GraphQL clients can be used to send queries with variables.

GraphQL Query With Variables
You can use the “QUERY VARIABLES” tab to add the variable username, pass it as a parameter to the GraphQL query, and use it to fetch data.

```javascript
query ($id: ID) {
  blog (id: $id) {
    id
    title
    author {
        name
    }
  }
}
```

```json
{
  "id" : "611d0433930907001698086d"
}
```

## Docs and schema tabs
The API documentation tab is one of the best features of GraphQl client. It enables you to preview GraphQL queries, GraphQL type details, and a single field of a given schema. 
This comes in especially handy when you have several nested GraphQL schemas.

## HTTP Headers
Additionally you can also send requests with HTTP headers, such as a token needed to authenticate a user or some other kind of authorization.

Make sure to first switch the tab to “HTTP HEADERS,” and then add your headers as a JSON object.