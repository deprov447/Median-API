---
title: "Setup"
date: 2021-09-21T14:11:55+05:30
draft: false
weight: 10
---

# Setup

## Local server

**Prerequisites :**
- [Node.js](https://nodejs.org/en/download/)
- [Hugo](https://gohugo.io/getting-started/installing/)
- [Git](https://git-scm.com/downloads)

**Steps to Setup**
- `git clone https://github.com/deprov447/median-api` : Clone the repo to your machine
- `cd median-api`
- `npm install` : Install all the required node dependencies
- `(cd src/frontend && hugo)` : Generate static front pages
- `npm start`

## Docker

**Prerequisites**
- [Docker](https://docs.docker.com/get-docker/)

**Steps to setup**

You can pull the latest version of Median from [Docker Hub](https://hub.docker.com/r/deprov447/median-api).
Use `docker pull deprov447/median-api`

**or else build your own image**:
- `git clone https://github.com/deprov447/median-api` : Clone the repo to your machine
- `cd median-api`
- `docker build --network=host -t median-api .` : Build the image
- `docker run --net=host median-api` : Start image