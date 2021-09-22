---
title: "Manual Request"
date: 2021-09-21T15:04:53+05:30
draft: false
weight: 30
---

## Making a Manual API Request

> All requests made to the Median GraphQL API must be made as a **POST** request.

When you make a request you'll need to include 2 payload objects, `query`, and `variables`. 

* query: contains your query or mutation strings.
* variables: contains the variable values used within your query.

You can omit the variables object and instead hard-code your values inside your query, however, this is not recommended past the simplest of queries.

### Example Query Request

Let's write a simple query to get a blog by its id.

{{< tabs "uniqueid" >}}
{{< tab "JavaScript">}}
```javascript
var query = `
query ($id: ID) {
  blog (id: $id) {
    id
    title
    author {
        name
    }
  }
}
`;

var variables = {
    id: "611d0433930907001698086d" 
};

var url = 'https://server-median.herokuapp.com',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

fetch(url, options).then(handleResponse)
                   .then(handleData)
                   .catch(handleError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}
```

This request will return the following JSON response:

```text
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
{{</tabs>}}

{{<tab "PHP">}}
```php
$query = '
query ($id: ID) {
  blog (id: $id) {
    id
    title
    author {
        name
    }
  }
}
';

$variables = [
    "id" => "611d0433930907001698086d"
];

$http = new GuzzleHttp\Client;
$response = $http->post('https://server-median.herokuapp.com', [
    'json' => [
        'query' => $query,
        'variables' => $variables,
    ]
]);
```

This request will return the following JSON response:

```text
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
{{</tab>}}

{{<tab "Python">}}
```python
query = '''
query ($id: Int) {
  blog (id: $id) {
    id
    title
    author {
        name
    }
  }
}
'''

variables = {
    'id': "611d0433930907001698086d"
}

url = 'https://server-median.herokuapp.com'

response = requests.post(url, json={'query': query, 'variables': variables})
```

This request will return the following JSON response:

```text
Object({
    "data": {
        "blog": {
            "id": "611d0433930907001698086d",
            "title": "101 Reasons Is A Waste Of Time ",
            "author": {
                "name": "Preston"
            }
        }
    }
})
```
{{</tab>}}

{{<tab "Rust">}}
```rust

use serde_json::json;
use reqwest::Client;

const QUERY: &str = "
query ($id: Int) {
  blog (id: $id) {
    id
    title
    author {
        name
    }
  }
}
";

#[tokio::main]
async fn main() {
    let client = Client::new();
    let json = json!({"query": QUERY, "variables": {"id": 1}});
    let resp = client.post("https://server-median.herokuapp.com/")
                .header("Content-Type", "application/json")
                .header("Accept", "application/json")
                .body(json.to_string())
                .send()
                .await
                .unwrap()
                .text()
                .await;
    let result: serde_json::Value = serde_json::from_str(&resp.unwrap()).unwrap();
    println!("{:#?}", result);
}
```
This request will return the following JSON response:

```text
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

{{</tab>}}
{{</tabs>}}
