# Introduction to React Redux

![](https://apiko.com/blog/content/images/2018/11/React-_--rEDUX.jpeg)

## Overview

In our last unit, we began working with React. With Functional Components, Hooks, Dependencies, and more, we have seen that one of the most powerful features of React is its ability to adapt and evolve. There are a myriad of different ways to build up on the React framework, and learning how to use them is going to be an important part of making a career in front-end development.

In this lesson, we'll be learning about the advantages of using ***Redux*** for state management with React and how it is set up.

## Objectives

- Setup Redux with a React app
- Start initial set up for a Redux state-managed Todo List

## Getting Started
- `Fork` and `clone` this repository
- `cd` into the new directory
- `npm install` to install our dependencies

___
## React and State Management

React by default comes with ways to handle `state`. We've seen `functional` components with `useState`. There are also different ways to manage state when using `class` components.

Typical state management follows the top down pattern, where our state is unidirectional in a downward flow. This is referred to as passing props.

Here's an example of React's out-of-the-box data flow:

![State Flow](images/state-flow.png)

**State must be passed in a downward manner as props to other components.**

What if I told you there was an easier way?

Enter Redux!

## Redux

What is `Redux`?

> Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other.

For React integration we'll be using one of Redux's binding libraries specifically made for react called `React Redux`.

### React Redux

Although you don't always need Redux for every application you build, it's important to understand why you would use `React Redux`.

From the `Redux Docs`:

> ## It is the Official Redux UI Bindings for React
>
> While Redux can be used with any UI layer, it was originally designed and intended for use with React. There are UI binding layers for many other frameworks, but React Redux is maintained directly by the Redux team.
>
> As the offical Redux binding for React, React Redux is kept up-to-date with any API changes from either library, to ensure that your React components behave as expected. Its intended usage adopts the design principles of React - writing declarative components.

> ## It Encourages Good React Architecture
>
> React components are a lot like functions. While it's possible to write all your code in a single function, it's usually better to split that logic into smaller functions that each handle a specific task, making them easier to understand.
>
> Similarly, while you can write large React components that handle many different tasks, it's usually better to split up components based on responsibilities. In particular, it is common to have "container" components that are responsible for collecting and managing some kind of data, and "presentational" components that simply display UI based on whatever data they've received as props.
>
> The React Redux connect function generates "container" wrapper components that handle the process of interacting with the store for you. That way, your own components can focus on other tasks, whether it be collecting other data, or just displaying a piece of the UI. In addition, connect abstracts away the question of which store is being used, making your own components more reusable.
>
> As a general architectural principle, we want to keep our own components "unaware" of Redux. They should simply receive data and functions as props, just like any other React component. This ultimately makes it easier to test and reuse your own components.
>
> ## It Implements Performance Optimizations For You
>
> React is generally fast, but by default any updates to a component will cause React to re-render all of the components inside that part of the component tree. This does require work, and if the data for a given component hasn't changed, then re-rendering is likely some wasted effort because the requested UI output would be the same.
>
> If performance is a concern, the best way to improve performance is to skip unnecessary re-renders, so that components only re-render when their data has actually changed. React Redux implements many performance optimizations internally, so that your own component only re-renders when it actually needs to.
>
> In addition, by connecting multiple components in your React component tree, you can ensure that each connected component only extracts the specific pieces of data from the store state that are needed by that component. This means that your own component will need to re-render less often, because most of the time those specific pieces of data haven't changed.

> ## Community Support
>
> As the official binding library for React and Redux, React Redux has a large community of users. This makes it easier to ask for help, learn about best practices, use libraries that build on top of React Redux, and reuse your knowledge across different applications.

## Redux Flow and Setup

Because `Redux` operates using a single `Store` to handle our state, it makes deciding which components should store state a lot easier to decide. Essentially, none of our components store state, `Redux` handles it all for us and allows us to accept that information as `props`.

Here's an example:

![Redux Store](images/redux-store.png)

Redux is built on the concept of `Reducers`, `Actions` and `Types`.

- Reducers are used so we can break up our state into little modules.
- Actions are things that we perform to update the state.
- Types are a definition of the actions we are performing.

We'll put some of this into practice in just a bit.

### Setup

A React app has been provided for us already.

In order to use `Redux` with our React app, we'll need to install a couple of new dependencies called `react-redux` and `redux`.

- Run `npm install react-redux redux`
- Once your install has finished let's create a new directory called `store` inside of your `src` folder.
This folder is going to hold our `Actions`, `Types` and `Reducers`.
- Start by creating an `index.js` file in the `store` folder.
- Once you've created the `index.js` file, open it in your code editor.

Let's add the following in that `index.js` file:

```js
import { createStore } from 'redux'
// First we import what we need from Redux...

const store = createStore(() => ({}))
// createStore accepts a function as an argument. This setup is just temporary until we set up Reducers.

export default store
```

Now, head over to the React app `index.js` where we call `root.render()`. We need to connect our new Redux store to our React app. Make our `index.js` look like the following:

```js
import React from 'react'
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

```

Let's break this down:

- We import the `Provider` component from `react-redux`, this component accepts a `store` prop that is our `store` we created in the previous step.
- We wrap our `App` component inside of the provider to give any component that lives within `App.js` access to our Redux store.

___
## Recap

We've successfully implemented a Redux store with our React app. We'll be using this same repo for the next few lessons. A few notes on Redux before we move on:
- Redux operates with the principles of `actions`,`types`, and `reducers`.
- It serves as an external state management store for our React app, allowing us to import state only where we need it.

## Resources
- [Redux Docs](https://react-redux.js.org/)
- [Why Redux?](https://almerosteyn.com/2016/08/redux-explained-again)
