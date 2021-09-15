
# Median API

![GitHub branch checks state](https://img.shields.io/github/checks-status/deprov447/median-server/master?style=for-the-badge)
![Website](https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fserver-median.herokuapp.com)
![GitHub deployments](https://img.shields.io/github/deployments/deprov447/median-server/server-median?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/deprov447/median-server?label=Size&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/deprov447/median-server?style=for-the-badge)

A GraphQL based feature rich blogging API.


---

## Buy me a coffee

Whether you use this project, have learned something from it, or just like it, please consider supporting it by buying me a coffee, so I can dedicate more time on open-source projects like this :)

<a href="https://www.buymeacoffee.com/deprov447" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" alt="Buy Me A Coffee" ></a>

---

# Features

## Lightweight

Median API is very lightweight as compared to other REST based API. And the main reason is that you get only the content you request for, which is not possible (or atleast cumbersome) in REST architecture.

For example if you only want titles of top 3 blogs, you can just pass a query like this and in response you only get those 5 respective titles:

[![recording89f7c02ede6efed0.gif](https://s9.gifyu.com/images/recording89f7c02ede6efed0.gif)](https://gifyu.com/image/J5h1)

## Platform Agnostic

The API is fully platform agnostic, ie any client on any platform can use this API. These include React application, Angular, Electron, Flutter, Native desktop apps on Qt etc. The possibilities are endless.

> Even if your platform doesnt have a library to make graphQL based request, you can use Median. See: (a blog reg this)

## Open Source

The API is fully open source, you can freely host it on your own server with all the customizations you want.

---

## Local Setup

- Clone this repo: `git clone https://github.com/deprov447/median-server`
- Run `npm install`
- Setup environment variables : 
	- Create a `.env` file in root directory of the project
	- Insert these 3 keys/value pairs :
		- **PORT** : *< Port on which server will listen >*
		- **DB_ADDR** : *< Mongo database connection URI >*
		- **SECRET** : *< Secret key for signing auth tokens >*
- Start the server: `npm start` 
- Start requesting from a client (eg: [playground](https://server-median.herokuapp.com/client))

---

## License

This project is licensed under the terms of the **MIT** license.

