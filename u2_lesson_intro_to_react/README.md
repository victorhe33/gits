# Intro To React

<div>
    <img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"/>
</div>

## Overview

In this lesson, we'll talk about React! React is a javascript library that gives us the ability to build some awesome single page applications using only javascript. This library allows us to build an interactive UI utilizing a modular component structure. The goal here is to break our code up into re-usable modules that can update our UI in a simple and efficient manner.

## Getting Started

- Fork and Clone
- Open this folder in VsCode

## What is React?

From [sharpcorner.com](https://www.c-sharpcorner.com/article/what-and-why-reactjs/)

> React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram in 2012.

> React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.

In short, React gives us the ability to rapidly build applications that are highly interactive in a quick and efficient manner. It uses something called the `virtual DOM` which is an abstraction layer over the native browser DOM. By using the the `virtual DOM`, React facilitates the communication between our code and the actual DOM. React uses a `modular` **`component`** based approach.

## Creating a project with React

Because React is a library, it's super easy to get started using it with our current knowledge of HTML and Javascript.

Open the provided `index.html` file.

Let's start by:

- adding a `div` in our `body` tag with an `id` of `root`
  ```html
  <body>
    <div id="root"></div>
  </body>
  ```
- next we'll add a couple of `scripts` to our html (make sure to add these after the newly created `div`)
  ```html
  <script
    src="https://unpkg.com/react@17/umd/react.development.js"
    crossorigin
  ></script>
  <script
    src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    crossorigin
  ></script>
  ```
- last step! Link the provided `button.js` file located in the `scripts` folder to our html. (Place this below the previous scripts!)
  ```html
  <script defer src="scripts/button.js" type="text/javascript"></script>
  ```

Let's do a quick recap:

- React needs some kind of parent element to render the UI we're about to build. The `body` tag is not a good candidate for this since the scripts are also loaded into the body. For this to work, we just utilize a `div` that we created earlier to attach the elements we're going to create later.
- We load in the scripts we'll need in order to use React
  - The first script is the React library itself which gives us access to some awesome functions to create elements and update the UI in realtime
  - The second script is for `ReactDOM`. This script is what is in charge of creating the `virtual DOM` and handling the communication between the javascript we write and what the browser needs in order to display the elements we create.
- The `button.js` file is where we're going to write our javascript and utilize the React library to keep our UI up to date.

## Using React for the first time

Now that our HTML file is set up, we can start working in the `button.js`. Once you open this file, an element query has been set up for you:

```js
const container = document.getElementById('root')
```

We'll use this `container` element to place the element we create into the DOM.

Here's where the magic happens, we'll be going over two ways of creating an element with React.

### Class Components

Up until recently, React utilized something known as `class components`. These are elements written using a class based syntax. Let's see how that worked, in your `button.js` file, let's add the following:

```js
class MyButton extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.incrementCounter = this.incrementCounter.bind(this)
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return React.createElement(
      'button',
      { onClick: this.incrementCounter },
      this.state.counter
    )
  }
}

const ClassButton = React.createElement(MyButton)

ReactDOM.render(ClassButton, container)
```

Okay hold on, theres a quite a lot going on here. Let's explain:

- We create a class of `MyButton` that extends another class from the React library called `Component`. This gives us access to some awesome functionality and methods:
  - `this.setState` is a method that's used to update the `state` of our UI.
  - `render` is a method that is used to tell React what to display in the UI.
    - `React.createElement` is a method that accepts:
      1. The type of element we want (similar to `document.createElement`)
      2. Any properties such as: event listeners, attributes etc.
      3. What we want to display in the newly created element. In our case, we want to display the current count stored in the `state` object.
- We create a `ClassButton` variable to store the output of `React.createElement`. This is one is behaving a little differently due to it reading the information we created in the `MyButton` class.
- Finally, we use the `ReactDOM` library to leverage it's `render` method.
  - this render method requires 2 things:
    1. The `component` we want to display
    2. Where we want to display it. (In this scenario, we're using the `root` div we created earlier)

Take a look at your `index.html` file in the browser and try interacting with the button we created!

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_intro_to_react/class-button.gif"/>
</div>

### Function Components

We've seen class based components, but what if you were told there was a more modern and simpler way of creating components? This is where the latest standard comes in: `function based components`.

Let's comment out the current code in the `button.js` (keep the `container` variable) and use the following instead:

```js
function Button() {
  const [counter, updateCounter] = React.useState(0)
  const handleCounterUpdate = () => {
    updateCounter(counter + 1)
  }
    return React.createElement(
      'button',
      {
        onClick: handleCounterUpdate,
        className: 'my-button'
      },
      counter
    )
}

const element = React.createElement(Button)

ReactDOM.render(element, container)
```

Let's talk about this syntax, it looks shorter.... But it accomplishes the same thing!

- We use a `function` to define our component
- We use a `method` from React called `useState` to hold the current count (we'll talk about this in a later lesson)
- Our return looks similar to the class based approach, the biggest difference is the lack of the `render` method. With function based components, React uses the `return` as the render!
- We're also passing in an additional property to our `button` element, `className`
  - `class` is a reserved word in javascript for obvious reasons. In order to add a `class` attribute to our element, we use `className` instead.
- We create the element the same way as before with `React.createElement`
- We append the element to the DOM using the `ReactDOM`'s render method.

Let's try this new component in our browser too!

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_intro_to_react/function-button.gif"/>
</div>

## A better way of writing components

So far we've seen two different ways of writing components and attaching them to the DOM using React. What if I told you there was an easier and more familiar way of writing our components? Enter `Babel`!

`Babel` is a tool used in javascript that allows us to translate our code into different formats. It is used in conjunction with React to give us the ability of writing simpler code and to lower the learning curve of React! Think of `Babel` as a translator of sorts. It will translate the syntax we're about to use into something the browser can read.

Let's add the following script above our `button.js` script in the `index.html`:

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Next modify the type for the `button.js` script:

```html
<script defer src="scripts/button.js" type="text/babel"></script>
```

> This will tell the browser to talk to babel in order to read our code.

In our `button.js`, comment out the current `return` statement:

```js
//   return React.createElement(
//     'button',
//     {
//       onClick: handleCounterUpdate,
//       className: 'my-button'
//     },
//     counter
//   )
```

Now add a new `return` statement with the following code:

```jsx
return (
  <button className="babel-button" onClick={handleCounterUpdate}>
    {counter}
  </button>
)
```

Comment out the following line:

```js
// const element = React.createElement(Button)
```

Modify the `ReactDOM.render` with the following:

```jsx
ReactDOM.render(<Button />, container)
```

Let's take a look at the browser one more time!

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_intro_to_react/jsx-button.gif"/>
</div>

Okay, how are we able to write `html` into a javascript file?!

Believe it or not this is **not** html, but something called JSX!

### What is JSX?

From [reactenlightenment.com](https://www.reactenlightenment.com/react-jsx/5.1.html)

> JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code. The syntax is intended to be used by preprocessors (i.e., transpilers like Babel) to transform HTML-like text found in JavaScript files into standard JavaScript objects that a JavaScript engine will parse.

> Basically, by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures) in the same file as you write JavaScript code, then Babel will transform these expressions into actual JavaScript code. Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.

In simple terms, it is a special syntax that allows us to write our javascript with something that looks like HTML to help speed up development and reduce the React learning curve! JSX gives us some really cool abilities which we'll learn about later on.

## Create React App

Let's talk about one more tool called `create-react-app`. With the current code we have, the structure is simple, but theres a couple of problems:

- the setup can be confusing
- lack of ability to keep our project up to date with the latest standards
- lack of ability to add additional libraries in an efficient manner

All of these things are important in the React ecosystem, this is where `create-react-app` comes in. In short, it is a tool that streamlines the process of working with React and gives us some really neat tools and built in functionality that we would otherwise have to set up ourselves.

This is going to be our tool of choice going forward with React!

Run the following command in this directory:

```
npx create-react-app my-app
```

This may take a few minutes so sit back and hydrate!

Once the process finishes, feel free to close the current `index.html`.

### Touring our new app

Once the `create-react-app` process finishes, you should have a folder called `my-app`. Let's open this up and see what we get!

Out of the box we get a few files and folders:

- `src`
  - this folder is where we'll write the majority of our code.
- `public`
  - the location of our `index.html`
  - This `index.html` file will be what's displayed in the browser later on.
- `node_modules`
  - a folder that contains all of the necessary dependencies or packages for our project
- `package.json`
  - a file that contains a list of scripts and dependencies our project needs in order to run

In the `src` folder, open the provided `index.js` file:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
```

So, theres a few new things going on, but there is one bit of code that does stand out:

```jsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

This looks familiar! Our previous example had almost the exact same code!

Let's take a look at the `App.js` file:

```jsx
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
```

This looks like our `Button` we created earlier as well! A few things are different yes, but we'll talk about these in a later lesson.

Let's take a look at one last file, the `index.html` file located in the `public` folder:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

It looks like they're using a `div` with an `id` of root here as well!

### How To Run a React App

We have all of this code provided which is neat, but unlike how we've worked with HTML and javascript before, we're going to use something called a `local server` to run our React app's. This will give us the ability to write code and see our changes in realtime!

To run this server, run the following command in the `my-app` directory:

```
npm start
```

Once the server loads, the following page should load in your browser:

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_intro_to_react/react-app.gif"/>
</div>

To stop the server you can use the <kbd>ctrl</kbd> + <kbd>c</kbd> keys in the terminal window where the server is running.

## Recap

In this lesson, we learned what React is and how it works on a very high level. In the upcoming lessons we'll dive deeper into the concepts we touched on during this lesson. The most important aspect of this lesson is to show you that React is not magic, it utilizes a lot of the concepts that you've learned so far in javascript and elevates them to another level.

## Resources

- [React Docs](https://reactjs.org/)
