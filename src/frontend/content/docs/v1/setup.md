---
title: "Setup"
date: 2021-09-21T14:11:55+05:30
draft: false
weight: 10
---

# Setup

## Docker Compose

**Prerequisites**
- [Docker](https://docs.docker.com/get-docker/)

**Steps to Setup**
- Clone the repo
- Make required changes to `docker-compose.yml`
- Run `docker compose up`

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
