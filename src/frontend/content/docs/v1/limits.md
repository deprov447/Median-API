---
title: "Configuring Limits"
date: 2021-09-21T17:00:37+05:30
draft: false
weight: 40
---

# Configuring Limits

There are currently 2 limits that can be enforced:
- Rate Limit
- Depth Limit

## Rate Limit

Median has an option of using a rate limiter (using sliding window rate limit algorithm) to enforces limit on number of requests an IP address can make in a minute. This is to prevent misuse of API by excessive querying (and thus crashing the system).

### Global Limit

A global rate limit can be enforced using [environment variables](/docs/reference-docs/env_var/#optional). By default it is infinite req/min 

### Local Limit

There is an option to configure local limits, ie each type of query would have different limits. A particularly useful scenario for this would be setting higher rate limit on `query`  and lower ones on `mutations`

#### Setting Local Limit

- Find the source file of your respective query.
- Pass an extra integer argument to the rateLimiter() function which will be the new limit for that query. 
- Restart the server.

> For example if you want to set a limit of 100 queries/min to `blog(ID)` query we will edit [this](https://github.com/deprov447/Median-API/blob/89757970691d29b3aeb46d8e9eb93ae8617bb079/src/schema/queries/blog.js#L12) and change <br>
>    `await rateLimiter(parent, args, context, info);` to <br>
>    `await rateLimiter(parent, args, context, info, 100);`

___

## Depth Limit

There is also an option to enforce depth limit, meaning limiting the depth of query. As the data is inter-related, an easy DOS vulnerability would be to pass a infinite/very long cylindrical query, and thus overloading the system.

An example of cylindical query would be:

```javascript
query{
  randomBlog{
    author{
      blogs{
        author{
          blogs{
            author{
              blogs{
                author
                {
                  ##...
                }
              }
            }
          }
        }
      }
    }
  }
}

```

A global depth limit can be enforce using [environment variables](/docs/reference-docs/env_var/#optional).