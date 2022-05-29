# Conditional Rendering

![conditional](https://i.imgur.com/DPsrU0G.png)

## Overview

In this lesson we'll be covering conditional rendering with React by building a small greeting application. Conditional rendering is important because it allows us to control the flow of user experience in an application.


As we know, there are many ways to set up conditional rendering with our Javascript. At its most basic, our final result will look something like this :

```js

const isLoggedIn = false

if (isLoggedIn = true) {
    return <h1> Welcome to our page! <h1>
} else {
    return <h1> Please log in! </h1>
}


```
If you can understand the basics of this syntax, you are already 50% of the way there. All we have to do now is factor this into our React app. 

Of course, between Ternaries and our Logical Operators (!, &&, ||), the order we want to compose our logic with, and the use of Components with Props, we can take this relatively simple block of code and build it up into something modern, elegant, and very powerful. 


```js

const isLoggedIn = false


return (!isLoggedIn ? <LogInPage />  :  <WelcomePage /> )


```



## Lesson Objectives

- Understand several methods for conditional rendering with React components
- Use conditional rendering with state to affect real time changes in our application's UI

## Getting Started

- `Fork` and `clone` this repository and `cd` into the new directory
- Create a new React app with `npx create-react-app .`
- Run `npm start` to open your app in the browser
- Within `src`, create a `components` folder to store components we'll be creating in this lesson

## Instructions


### Setup

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like `if` or `?` to create elements representing the current state, and let React update the UI to match them.

We'll start by adding two components into our `components` directory:

#### UserGreeting.jsx

```jsx
const UserGreeting = () => {

  return <h1>Welcome back!</h1>
}

export default UserGreeting
```

#### GuestGreeting.jsx

```jsx
const GuestGreeting = () => {

  return <h1>Please sign up.</h1>
}

export default GuestGreeting
```

We’ll then create a Greeting component that displays either of these components depending on whether a user is logged in:

#### Greeting.jsx

```jsx
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn

  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

export default Greeting
```

Make sure to import our `Greeting` component into `App.js` so it is rendered and pass props to it for the `isLoggedIn` boolean value.

#### App.js

```js
import Greeting from './components/Greeting'

const App = () => {

  return <Greeting isLoggedIn={false} />
}

export default App
```

This example renders a different greeting depending on the value of `isLoggedIn` prop.

- Which greeting is our component rendering?
- Now let's try changing value of `isLoggedIn` being passed from `App.js` to `true`
- Has anything changed with our rendered components?
- Wait, where did `<GuestGreeting />` go?

![](https://media1.tenor.com/images/cfa7b21f58649ce86b82ae3c7fdc0485/tenor.gif)

### Element Variables

You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.

Let's create two more new components in our `components` folder representing `Logout` and `Login` buttons:

#### LoginButton.jsx

```jsx
const LoginButton = (props) => {

  return <button onClick={props.onClick}>Login</button>
}

export default LoginButton
```

#### LogoutButton.jsx

```jsx
const LogoutButton = (props) => {

  return <button onClick={props.onClick}>Log Out</button>
}

export default LogoutButton
```

In the example below, we will now add `state` to our `App` using the `useState` hook to track our `isLoggedIn` variable. We'll also import our two button components from above and attach methods to set the state of `isLoggedIn` with `onClick` event listeners.

- In the `App` component, we'll create a variable `button` that conditionally renders one of our button components depending on whether the user `isLoggedIn` or not.
- `App.js` will now render either `<LoginButton />` or `<LogoutButton />` depending on its current state.
- It will also render a `<Greeting />` from the previous example:

```js
import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

const App = () => {
  const [isLoggedIn, toggleLogin] = useState(false)

  const handleLoginClick = () => toggleLogin(true)

  const handleLogoutClick = () => toggleLogin(false)

  let button

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />
  } else {
    button = <LoginButton onClick={handleLoginClick} />
  }

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  )
}

export default App
```

While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below.

### Inline If with Logical && Operator

![and](https://media.tenor.co/images/bf504f6a2b7ad83c2f78dfeee2d2ede0/raw)

You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical `&&` operator. It can be handy for conditionally including an element.

Let's add one more component to our `components` folder

#### Mailbox.jsx

```jsx
const Mailbox = (props) => {
  const unreadMessages = props.unreadMessages

  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  )
}

export default Mailbox
```

Now we'll import it within our `App.js` component.

```js
import Mailbox from './components/Mailbox'
```

Before we render `Mailbox`, we'll need to add another state variable to pass props into `Mailbox`.

```js
const [unreadMessages, setUnreadMessages] = useState([
  'Hello',
  'World',
  'This is Doordash with your order'
])
```

Finally, inside of `App.js `, we'll add a variable `mailbox` and set it equal to another inline logical && operator that will only render `<Mailbox />` if the user is logged in.

- Don't forget to call in `{mailbox}` inside your return statement.

```js
// App.js

let button
const mailbox = isLoggedIn && <Mailbox unreadMessages={unreadMessages} />

if (isLoggedIn) {
  button = <LogoutButton onClick={handleLogoutClick} />
} else {
  button = <LoginButton onClick={handleLoginClick} />
}

...
```

<details>
  <summary>
    Your <code>App.js</code> should look like this when you're finished
  </summary>
  
```js
import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Mailbox from './components/Mailbox'

const App = () => {
  const [isLoggedIn, toggleLogin] = useState(false)

  const [unreadMessages, setUnreadMessages] = useState([
    'Hello',
    'World',
    'This is Doordash with your order'
  ])

  const handleLoginClick = () => toggleLogin(true)

  const handleLogoutClick = () => toggleLogin(false)

  let button

  const mailbox = isLoggedIn && <Mailbox unreadMessages={unreadMessages} />

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />
  } else {
    button = <LoginButton onClick={handleLoginClick} />
  }

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
      {mailbox}
    </div>
  )
}

export default App
```
</details>

So why does the logical && operator work with conditional rendering in React?

It works because in JavaScript, `true && expression` always evaluates to `expression`, and `false && expression` always evaluates to `false`.

Therefore, if the condition is `true`, the element right after `&&` will appear in the output. If it is `false`, React will ignore and skip it.

### Inline If-Else with A Ternary Operator

![ternary](https://i.pinimg.com/originals/85/d9/26/85d9268373fde414bdc43cb09b40de8b.gif)

Another method for conditionally rendering elements inline is to use the JavaScript conditional operator `condition ? true : false`.

To try this out, let's add a `<p>` tag inside the return of `App.js`. This `<p>` tag will tell us whether the user is logged in or not depending on the outcome of the ternary statement:

```js
// App.js
return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      <p>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</p>
      {mailbox}
      {button}
    </div>
  )
```

### Preventing Component from Rendering

In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.

## Recap

With React we are able to control the flow of rendering and user experience with conditional JavaScript statements. Statements often used in React apps to conditionally render components include:

- `if` / `else` Statements
- Logical `&&` Operators
- Ternary Operators
- `switch` Statements

Make sure to use conditional rendering to create more controlled applications in React!

![Burn](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F1ofR3QioNy264%2Fgiphy.gif&f=1&nofb=1)

## Resources

- [Conditional Rendering React Repository](https://github.com/reactjs/reactjs.org/tree/master/content/docs/conditional-rendering.md)
- [React Conditional Rendering Docs](https://reactjs.org/docs/conditional-rendering.html)
