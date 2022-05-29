# Full Stackathon

![Hackathon](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.usdigitalpartners.com%2Fwp-content%2Fuploads%2Fhackathon.gif&f=1&nofb=1)

## Overview

In this group project, you will have **_a day and a half_** to create a **theme park themed** Full Stack Application. This will include a **React frontend**, a **MongoDB database**, and a **Mongoose/Express backend**. How you distribute the work within your group will be up to you. By the end of the hackathon, you will be expected to have a _working_, _reasonably styled_, and _deployed_ app. Have fun!

![RTC](https://i.pinimg.com/originals/0f/06/1c/0f061ca920c14da63d05ccbb051762f4.gif)

## Instructions

- Choose a team git boss/czar/fairy to handle pull requests from team members
- Build your own API with:
  - A MongoDB database connected to mongoose
  - Mongoose schemas and models
  - Server Middleware
  - Routes and Controllers
- Build a React Frontend within a `client` directory _inside_ the main project directory:

  ```sh
  npx create-react-app client
  ```

- Set up a `.gitignore` file that prevents your application from pushing up `node_modules`

  ```sh
  touch .gitignore
  echo "node_modules" >> .gitignore
  ```

- Style your React App professionally
- Connect them with `axios` in the React App. Your server's base URL should look something like this in development http://localhost:3001/api/
  ```js
  const BASE_URL = 'http://localhost:3001/api'
  // When using the BASE_URL
  axios.get(`${BASE_URL}/someroute`)
  ```
- Deploy the MongoDB Database with Atlas
- Deploy the Express Server with Heroku
- Deploy the React App with Heroku

![Oops](https://i.pinimg.com/originals/c9/98/27/c998277875507777af62b5be689f58f9.gif)

## Requirements

- Get (Read)
- Post (Create)
- Connected Mongoose/Express backend
- Working React frontend
- Reasonably styled
- Deployed to Heroku

---

### **FINAL PRODUCT DUE: Friday, March 25th at 9:00AM EST (complete or not)**

---

## Deployment

We'll be deploying our app on Heroku, you can sign up for an account [Here](https://www.heroku.com/). Heroku is a web service provider that will host our server and React app on the cloud.
We'll be using MongoDB Atlas to host our database on the cloud, sign up for an account [Here](https://www.mongodb.com/cloud/atlas/register).

We'll be utilizing Express to display our react app once we deploy. We'll cover these steps on the final day with a guided deployment walkthrough.

In preparation for deployment, you should have a `client` folder containing your React app and a seperate `server` folder containing your Express app.

The folder structure should look like this:

```
.
├── client
|   |-- README.md
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   └── yarn.lock
|--server
|   ├── controllers
|   │   ├── Controller1.js
|   │   └── Controller2.js
|   ├── db
|   │   └── index.js
|   ├── models
|   │   ├── Model1.js
|   │   ├── Model2.js
|   │   └── index.js
|   ├── package.json
|   └── server.js
```
