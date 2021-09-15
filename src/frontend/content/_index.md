---
title: Introduction
type: docs
---

# Median API

A GraphQL based feature rich blogging API.

## Lightweight

Median API is very lightweight as compared to other REST based API. And the main reason is that you get only the content you request for, which is not possible (or atleast cumbersome) in REST architecture.

For example if you only want titles of top 3 blogs, you can just pass a query like this and in response you only get those 5 respective titles:

{{< columns >}}

### Query

```
    query {
        blogsByRank(num: 5) {
            title
        }
    }
```

<--->

### Response

```
    {
        "data": {
            "blogsByRank": [
                {
                    "title": "101 Reasons Is A Waste Of Time "
                },
                {
                    "title": "Using 25 Strategies Like The Pros "
                },
                {
                    "title": ": The Samurai Way "
                }
            ]
        }
    }
```

{{< /columns >}}

## Platform Agnostic

The API is fully platform agnostic, ie any client on any platform can use this API. These include React application, Angular, Electron, Flutter, Native desktop apps on Qt etc. The possibilities are endless.

> Even if your platform doesnt have a library to make graphQL based request, you can use Median. See: (a blog reg this)

## Open Source

The API is fully open source, you can freely host it on your own server with all the customizations you want.
