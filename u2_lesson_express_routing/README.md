# Express Routing

![Route66](https://maddencdn.com/content/images/2016/amarillo/route66/route66.gif)

## Overview
In this lesson, we'll learn about *routing* in Express and how to build API endpoints.  We'll also take a look at queries and parameters and discuss HTTP methods and their use.

## Objectives
- Build API Endpoints
- Learn about query and parameters
- Define which HTTP methods perform which action

## Getting Started
- `Fork` And `Clone` this repository
- `npm i` and install our dependencies
- Have [Insomnia](https://insomnia.rest/download/core/?) ready to go

## Express Boilerplate

```js
const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()
//  Your Code Here

// End Your Code Here
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))
```

![Breakdance](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3oEjHZ10CNMhK6bpgQ%2Fgiphy.gif&f=1&nofb=1)

### Let's Break It Down

We are importing the `express` package by using javascripts `require` method. The `PORT` variable will be a port number stored in our environment `or` 3001. Storing the express library in a variable called `app`. Using the listen method to have our server listen on the specified port.

## Building Our First Route

If we `console.log(app)`, we'll see an object with values that are functions from Express. If you look closely you'll notice a couple of keys that may look familiar.

```sh
get: [Function (anonymous)],
post: [Function (anonymous)],
put: [Function (anonymous)],
delete: [Function (anonymous)]
```

Express provides functions that can handle `http` requests out of the box. We'll see them in action in the next step.

## Building Routes and Handlers/Controllers

Each of the functions shown above require a string for the first argument and a function for the second. The first argument is a string representing the `url` or `endpoint` that we want to make a request to. The second argument, which is a function provides a way to handle some sort of action in each route. Let's put them to use.

### Defining a `GET` Route.
To define a route, we are going to leverage our `app` variable with dot notation to gain access to the functions inside of the Express object.

Add the following code to your `app.js`:

```js
app.get('/hello', (request, response) => {
  console.log("You're in the /hello route handler!")
  response.send('Howdy')
})
```

Congrats, you've just written your first Express Route! Yeehaw!

![Yeehaw](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F68.media.tumblr.com%2F03377ee089ad052b5edc0309f9807d15%2Ftumblr_ng2r2pLWT91s58xblo2_500.gif&f=1&nofb=1)

### Let's Break It Down

We are using our `app` variable to access a function called `get`. This function recieves 2 parameters/arguments, a string for an endpoint and a function to handle a request.

Our function to handle the request is provided 4 arguments from Express, `request`, `response`, `error` and `next`. For the time being we will only be using `request` and `response` parameters.

More on those here:

- [Request](https://expressjs.com/en/api.html#req)
- [Response](https://expressjs.com/en/api.html#res)

In our example above we set the endpoint to `/hello` and provide a function that accepts a `request` and `response` object.

The `request` object is provided by express and contains some useful information that we can use to look for specific information, more on that later.

The `response` object has built in methods that allow us to send whoever was making a request to our server some type of information. In our example above we simply send back a string of `Howdy` using the `send()` method.

### Defining a `POST` Route
Let's create another route, this time to recieve a `post` request. Remember a `post` request is typically used to send a server some type of information, for example a form or possibly a file.

Add the following code to your app:

```js
app.post('/hello', (request, response) => {
  console.log(`You've sent a post request to the /hello endpoint.`)
  response.send({ msg: 'Thanks for the post!' })
})
```

We've successfully sent a `post` request to our server!

In this example we passed an object to `response.send()`. Express has some built in tools that handle any kind of data that can be sent back as a string and sends it in the correct format. Sending information back in an object is a common practice when building [RESTful](https://en.m.wikipedia.org/wiki/Representational_state_transfer) API's.

Take note of the endpoint we've used here. It's exactly the same as the `get` request we made earlier. Express allows us to do this because the methods used for that endpoint are different. However, this does not apply if the route methods are the same.

For example if we were to add another route to our server with the same endpoint:

Try this code in your app and add it below our first `/hello` endpoint.

```js
app.get('/hello', (request, response) => {
  console.log("You're in the second /hello route handler")
  response.send('Howdy from the second handler.')
})
```

Express will default to the first one it finds. You'll always get back `howdy`. Keep that in mind when defining your endpoints!

![Spiderman](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F837072ca19e3c5cebea76e2693f3100d%2Ftenor.gif%3Fitemid%3D11796793&f=1&nofb=1)

## Dynamic Endpoints
In Express, we can create dynamic endpoints by using the in built in `request` object.

### Params

Example:

```js
app.get('/message/:id', (request, response) => {
  console.log(`Getting a message with the id of ${request.params.id}`)
  response.send({ msg: `Message with an id of ${request.params.id} found` })
})
```

In our example above, we are defining a `/message` endpoint, however, we also add in `/:id`. This is what's known as a request parameter. This parameter dynamically changes whenever some type of information is passed in. We access this parameter by using `request.params.{yourParamName}` inside of our function.
You can name your parameter anything, but it should always be relevant to the kind of information that you are looking for.

### Query

Example:

```js
app.get('/find', (request, response) => {
  console.log(
    `Finding someone with a name of ${request.query.myName} and an age of ${request.query.myAge}`
  )
  response.send({
    msg: `${request.query.myName} is ${request.query.myAge} years old.`
  })
})
```

In this example we are defining a `/find` endpoint. This endpoint utilizes the `request` object and gets information from the `query` object that resides inside of it.

Query's function in different way from `params` because we dont set any placeholders ahead of time. Instead this information is given when constructing the endpoint:

`localhost:3001/find?myName=Bob&myAge=23`

We start a query with the `?` operator and set a variable that will hold some type of value. If any additional information is needed we use the `&` operator to append extra variables and values.

![Sesame](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FATt7p8OO4mvvO%2Fgiphy.gif&f=1&nofb=1)

## You Do

- Create a `GET` endpoint `/dogs` and send a string with your favorite dog breed.

- Create a `GET` endpoint `/cats/:catName` and send the cat name you provide back in an object.

- Create a `POST` endpoint `/towns` and send your hometown back in an object.

- Create a `PUT` endpoint `/profile/update/:username`, and send back a string that reads: `User profile with the username of {Whatever username you chose} was updated`.

- Create a `DELETE` endpoint `/tacos` with the query parameters of `type` and `tacoId`, and send back an object with `I deleted the {your taco type} with an id of {your taco id}`.

![Snoop](https://media.giphy.com/media/3ohs7YMlUQ6Jk8w0rS/giphy.gif)

## Recap
We learned about HTTP methods and how to access them in Express to perform different tasks.  We also learned about queries and parameters in URLs.  It's easy to see how we can leverage user input via queries and parameters to perform different tasks with our back-end!

## Resources
- [Insomnia](https://insomnia.rest/download/core/?)
- [Request](https://expressjs.com/en/api.html#req)
- [Response](https://expressjs.com/en/api.html#res)
- [RESTful](https://en.m.wikipedia.org/wiki/Representational_state_transfer)
