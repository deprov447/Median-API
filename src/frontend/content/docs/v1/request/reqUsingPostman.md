---
title: "Using Postman"
date: 2021-09-21T15:04:34+05:30
draft: false
weight: 20
---

# Request Using Postman

Postman is an API testing framework. You can download it from [here](https://learning.postman.com/docs/getting-started/installation-and-updates/) (although if you need to download this, you should probably stick to [GraphQL client](/docs/v1/request/reqUsingClient/) for testing)

## Steps To Make Request
- Select request type as `POST`
- Set URL

![Screenshot](https://i.imgur.com/Ph3zXhr.png)

- Change the request type to GraphQL in body tab
- Write a query. Example : 

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
- Set variables (Optional). Example :
```JSON
{
 "id": "611d0433930907001698086d" 
}
```
You would get a JSON response. Example:
```JSON
{
    "data": {
        "blog": {
            "id": "611d0433930907001698086d",
            "title": "101 Reasons Is A Waste Of Time ",
            "author": {
                "name": "Preston"
            }
        }
    }
}
```