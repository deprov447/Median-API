---
title: "Environment Variables"
date: 2021-09-21T13:36:31+05:30
draft: false
weight: 20
---

# Environment Variables

## List Of Variables 

### Necessary

| Variable Name | Description |
| --- | ----------- |
| **PORT** | Port for local server (This might not be required while deploying). |
| **DB_ADDR** | MongoDB Connection URI String. [Read Also](https://docs.mongodb.com/manual/reference/connection-string/) |
| **SECRET** | Secret key to hash JWT tokens. |


### Optional

| Variable Name | Default | Description |
| --- | ----------- | -- |
| **RATE_LIMIT** | Infinite | Limit number of requests per minute allowed to a certain IP |
| **DEPTH_LIMIT** | Infinite | Limit depth of nesting in a query |


> If your using bash, run `LC_ALL=C head /dev/urandom | tr -dc A-Za-z0-9 | head -c32` to generate a 32 char long random string for _SECRET_


## How To Set Variables

The method to set environment variables depends mostly on what system you are using / where the server is deployed. But here are a few ways to set env variables:

### Local System

#### CLI

You can pass the variables with the command to start server 

For Example: `$ RATE_LIMIT=5 npm run dev`

#### Using a .env file

You can also set environment variables in a .env file (recommended).

- Create a file named `.env` in root directory of your server.
- Insert the key-value pairs.

For Example:
```text
PORT = 8080
DB_ADDR = <your MongoDB URI>
SECRET = thisismysecretkey
RATE_LIMIT = 10
DEPTH_LIMIT = 3
```

### Deployment Server

The method to set environment variables differs for every hosting provider, but most probably you can set variables from the dashboard of your hosting provider. 

For example, in Heroku you can do [this](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard).