# Intro to Express

![Hogwarts](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F38.media.tumblr.com%2Ff87f45a928d19394f4e1c20e1ce3fe69%2Ftumblr_nb7g7nSAEv1qgxmqno1_500.gif&f=1&nofb=1)

![Express](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-yo7D6br-wNM%2FVlaot4Pg5LI%2FAAAAAAAABQA%2FjZ1HOzjWi7g%2Fs1600%2Fhogwarts_express_6.gif&f=1&nofb=1)

## Overview
[Express](http://expressjs.com) is a library we'll use to make web servers for our front-end applications to query our databases.

# Getting Started
- `Fork` & `Clone`
- `cd` into the directory
- `touch` a `server.js` file
- `code .` to open in VSCode

## Objectives
 - Review the HTTP request / response flow
 - Explain the role of a web server in a full-stack application
 - Write a route handler for a GET request with Express
 - Pass information with query and route parameters
 - Respond to a GET request with data from a database

## HTTP
You may have seen `http` or `https` while browsing the web before. What you may not know is that HTTP is the structure of messages that all information travels in over the web. 

When you visit a webpage in your browser, you type in a URL like `https://wizardingworld.com/`. What's technically happening here, is you're making an **HTTP request**. The browser sends a message to the Harry Potter web server that speaks HTTP: "Hey, can I have the contents for the domain `wizardingworld.com`, at the path `/news`?

The web server sends an **HTTP response** back with the HTML content of that website. Magic!

This **HTTP request** and **response** cycle is at the heart of the web.

![Magic](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FQX0rXtXaDkdJm%2Fgiphy.gif&f=1&nofb=1)

## Where Express Fits In

Express is a JavaScript library to set up your own web server, which listens for different kinds of HTTP requests, and serves the right response.

We'll use Express solely as a **JSON API server**. Our database might contain information about quidditch matches. Our React-powered front-end application will make `axios` calls to our server to, say, get all the matches at `/api/quidditch-matches.json`. 

In working on the web server, it is your job to write code to listen for a `/api/quidditch-matches.json` HTTP request, query information from the database, and then send it back to the front-end in an HTTP response.

## Installing

To use Express, you'll add the package on a ***project by project basis*** with `npm`:

```
npm install express
```

## Express Boilerplate

To use Express, we `require()` the package in our `server.js` file, create a new Express application object, and finally start the application "listening" on a specific port. Let's build this out together:

```js
const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
```

Our server won't do anything just yet, this is just boilerplate to use Express.


![Wands](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3UtEIg06e3uz6%2Fgiphy.gif&f=1&nofb=1)

## Our First Route
In Express, you define a **route** in a `server.js` file.  A route is a path the user makes an HTTP request for, such as GET `/`, and a handler function that takes care of that request. Like this...

```js
app.get('/', (req, res) => {
  res.send("You're a wizard, Harry!")
})
```

Whenever an HTTP request to `http://localhost:3001/` is made, the handler function is called. This function has access to two variables: `req` and `res` which represent the HTTP **request** (any information the user sent along to us) and the HTTP **response** (any information the server bounces back).

You might end up doing a lot in these route handler functions. One thing they have to do is **send** an HTTP response back, which we're doing here with `res()`.

When a user visits `http://localhost:3001/` in the browser, they'll see "You're a wizard, Harry!" displayed on the page. Note that if they go to `http://localhost:3001/news`, we see an error message "Cannot GET /news" because that's a different path that we haven't defined a route for.

## Running an Express Server With `nodemon`

A web server is a long-running process, which you could just run with `node server.js`. This would spin up your server *once*. However, since you'll be editing the server files and continuously testing it, you would have to stop the `node server.js` process and restart it after every change. Ain't nobody got time for that!

![ColdPops](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FbWM2eWYfN3r20%2Fgiphy.gif&f=1&nofb=1)

Let's use a cool package called `nodemon` instead. We add this on a ***project by project basis***:

```
npm install nodemon --save-dev
```

Then modify the `scripts` section in the `package.json` file to add a `start` and `dev` script. This allows us to run `npm start` to run a one time spin up of our server *or* `npm run dev` to run our server with `nodemon`:

```
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"  
}
```

Say it with me: Magic!

![Hermoine](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FOUwzqE4ZOk5Bm%2F200.gif&f=1&nofb=1)

## You Do
In our Express server in `server.js`, let's define the following routes:
```
 - GET /                  Response content: "Welcome to my webpage"
 - GET /favorite-food     Response content: Your favorite food
 - GET /favorite-movie    Response content: Your favorite movie
 - GET /about-me          Response content: A little autobiography
 - GET /contact           Response content: Your preferred contact info
```
## Route Parameters
If you consider two URLs:

 - wizardingworld.com/article/top-ten-wizards-all-time
 - wizardingworld.com/article/draco-malfoy-villain-or-victim

You could safely assume that both of these URLs are articles, just with different [URL slugs](https://en.wikipedia.org/wiki/Clean_URL#Slug): `top-ten-wizards-all-time` and `draco-malfoy-villain-or-victim`. By convention, if a part of the URL contains two words, we join them with `-`. This is known as "sluggifying".

When writing an Express route, you can access the dynamic parts of the path by declaring them as **route parameters**:

```js
app.get('/article/:slug', (req, res) => {
  console.log(req.params)
  // { slug: 'top-ten-wizards-all-time' }
})
```

In the path definition, add a colon before a meaningful name for the parameter. You'll have access to the dynamic value inside of the `req.params` object.

## Lesson Recap
We were introduced to Express, learned about HTTP requests, and how to set up basic Express server boilerplate.  We also got some practice in with setting up routes.  All in all, not too bad of a lesson!

![Friends](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd8%2Fd7%2F65%2Fd8d765d9fc0c9bf019f8a76a4a510fc4.gif&f=1&nofb=1)

## Resources
 - [Express](http://expressjs.com)
 - [Sweet Brown](https://youtu.be/zGxwbhkDjZM)
