# 🍍🍇🍐 Express Fruits 🍓🍌🥭

![fruit](https://s3.amazonaws.com/secretsaucefiles/photos/images/000/104/044/large/fruit-dancing-gif.gif?1485312342)

## Overview

It's time to get some practice setting up an express server and writing a few routes.  Feel free to test these routes either with the browser's navbar, a small `node` script using `axios` or a toy react app with connected with `axios`. We'll also be working with the data array in `fruits.js` to practice our routes.

## Getting Started

- `Fork` and `clone` this repo
- `cd` into the repo
- `touch index.js` to create an entry point for your server
- Run `npm init -y` to initialize your project as a `Node.js` project
- Install express with `npm i express`
- We'll install `nodemon` with `npm i nodemon --save-dev` to save it as a dev dependency
- Add `start` and `dev` scripts to `package.json` that will run on your server's entry point:
	```js
	"scripts": {
		"start": "node index.js",
		"dev": "nodemon index.js"
	}
	```
- `touch .gitignore`

## Instructions
### Set up an Express server

Let's write the boilerplate for an express server:

- First, import `express` by requiring it at the top of `index.js` with:
	```js
	const express = require('express');
	```
- Next, import `fruits` from fruits.js. 
	```js
	const fruits = require('./fruits');
	```
- Go ahead and define a `PORT` constant variable: 
	```js
	const PORT = process.env.PORT || 3001;
	```
- Init an `app` instance below your initial imports:
	```js
	const app = express();
	```
- You may want to create some space between your app instance and the step below since we'll be writing routes in between them shortly.
- Finally, bind the app to a port with `app.listen()` at the bottom of the file:
	```js
	app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))
	```

Now start the server from the terminal with `npm run dev`. If all goes well, you should see the message from the console log above in the console.  _Don't stop the server until you are done writing code or unless you just want to restart it._ If you save the `index.js` file the server should automatically re-load the changes and restart since we're using `nodemon` in our `dev` script in `package.json`.

___
### Adding Basic Routes

Start off by defining a simple ping-pong `GET` route:

```js
app.get('/ping', (req, res) => {
  res.json('pong');
})
```

- Try to test this route out by navigating to `http://localhost:3001/ping` with your web browser.
- Alternatively, you could test this route by using a tool like [Insomnia](https://insomnia.rest/) to make a `GET` request to the same URL.

Now that's what I call computer ping-pong! Let's create a few more routes to ping our express server with below. Before doing so, let's recall the basic syntax for an express `GET` route method made with an instance of express. In this case `app` is our express instance:

```js
app.get('/someroute', (req, res) => {
  // do something here if necessary before the response
  res.send(data)
  // send data back in response to the incoming request
})
```
<details><summary>Notes on the <code>GET</code> route method if you'd like more information</summary>
  
  <br />
  
  Routes are the first argument of the `.get()` method
  - Routes are _**always**_ `strings` denoting URL parameters 
  
	  ```js
	  // The route of a GET request method
	  app.get('/someroute', // callback here
	  ```
	  
  The `.get()` method requires a callback function as its second argument. In the arguments for this callback function, we'll always pass the Request followed by the Response object, typically with `(req, res)` for shorthand.
  
  - Inside the callback, we'll typically send some sort of `responseData` (_strings, arrays, objects, booleans, numbers_) related to the incoming request with the response object's `.send()` method
  
  	```js
	// The callback function within a GET request method
	(req, res) => {
	  res.send(responseData)
	}
	```
	
  - Now, putting it all together:
	  
	  ```js
	  app.get('/someroute', (req, res) => {
	    res.send(responseData)
	  })
	  ```
	
</details>

___
#### `/greet/:name`
`GET` `/greet/:name` should return a greeting with the supplied name, e.g., `'Why hello there, <name>!'`

Recall you can access the URL parameters with `req.params`


#### `/five`
`GET` `/five` should return an array of the numbers from 1-5

Remember that you can create variables above your response


#### `evens/:n`
`GET` `/evens/:n` should return an array of even numbers from 2 up to and including `n`.  So when you call this route, `n` in the URL should be a number.

Also, you may need to use `parseInt()` to cast the supplied `n` parameter to a number when adding it to your array


#### `/namelength/:name`
`GET` `/namelength/:name` should return the length of the supplied name in the URL params

___
### Fruit Routes
#### `/fruits`

`GET` `/fruits` should return an array with all the fruits.

Let's add a route that retrieves all of the fruits (_the whole array_) from our `fruits.js` file. Recall we imported it on top of our `index.js`.

```js
app.get('/fruits', (req, res) => {
  //your code here 
  res.send()
})
```


#### `/fruits/:name`

Now let's add a route that takes a route parameter `name` and retrieves the fruit that matches the supplied name. 
```js
app.get('/fruits/:name', (req, res) => {
  //your code here
  // HINT - you can use a higher-order array method 
})
```

Recall you can access the URL parameters with `req.params`.

However, you might notice that the fruit names in `fruits.js` are **Capitalized**. You could send a Capitalized string in the URL params to make it work, but what if you wanted to make sure your params worked every time?
- One useful string method to look into here might be [.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- If you aren't familiar with it, [.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) may also be useful somewhere in this function

___
## Requirements
- The project must be initialized with `npm init` and set up as an express app.
- All routes should be working on http://localhost:3001/
- All routes must send the proper data specified for the route using express's request and response objects


## Bonus 

`GET` `/fruits/sort` should return the fruits array sorted alphabetically using [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). 

```js
app.get('/fruits/sort', (req, res) => {
  // implement sort

  res.send()
})
```

<details><summary><sup>Secret Bonus</sup></summary>
	
   <br />
	
   What if we wanted to add a catch-all route to our express app so some crazy fruit ninja doesn't go breaking things?
   
   To prepare for that, let's add this quick route at the **very bottom** of our routes, just above `app.listen()`
   
   ```js
   app.get('*', (req, res) => {
     res.send('404 Not Found')
   })
   ```
   
   A couple important things to note:
   - The `*` used for a route will cover _any_ route request made to our server, meaning that it will respond with this 404 message for any URL param chained on to `http://localhost:3001`
   - That being said, since it will respond to _any_ route, we put it at the **bottom** of our server, so our other routes are still accessible while routes that don't exist will be sent to an error message
   - Use it wisely if you choose to

   ![great power](https://31.media.tumblr.com/tumblr_lqb3ag4MPc1r1edcbo1_500.gif)

</details>

## Submission Guidelines
- Pull Request must be submitted utilizing these guidelines: [PR Guidelines](https://github.com/SEI-R-2-22/template_pull_request)

## Resources
- [Additional Reading on req.params](https://coursework.vschool.io/express-params-and-query/)



