# React Props

![](https://i.ytimg.com/vi/GIU8ekYndKw/maxresdefault.jpg)

## Overview

In this lesson, we'll learn how to utilize `properties` or `props` for short to create reusable elements in React. `Props` allow our components to change dymanically based on information that we provide in a quite familiar syntax!

## Getting Started

- Fork and Clone
- `npm install`
- `npm start`

## What are `props`?

[Cem Eygi (medium.com)](https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0)

> “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.
> But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)
> Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.

In short, `props` are pieces of information that we can provide to any component in a `downward` direction (We'll talk about this shortly). `Props` can be any information we want whether that be `strings`, `objects`, `arrays` or `functions`.

## Prop Syntax

`Props` follow a very simple convention:

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_lesson_react_props/prop-structure.png" style="height:250px;" alt="prop structure"/>
</div>

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_lesson_react_props/prop-variable.png" style="height:250px;" alt="prop with variable"/>
</div>

The name of the prop, is defined very similarly to an HTML attribute. We can set the value a couple of different ways:

- If you're using just a normal data type like a string, we can pass the props value in quotes.
- If you're using some variable or function, we use the `{}` syntax to tell react that this value is some kind of javascript.

Let's try this for ourselves. In `App.js`, import the provided `Button` component from the `components` folder:

```js
import Button from './components/Button'
```

Next we'll add this button to our markup like so:

```jsx
<div>
  <Button />
</div>
```

Here's where things get interesting, provide a `prop` to the `Button` component with a name of `text` and a value of `Awesome Button`:

```jsx
<div>
  <Button text="Awesome Button" />
</div>
```

Take a look at your browser you should see the following:

<div>
<img src="https://sei-r.s3.amazonaws.com/u2_lesson_react_props/button-no-prop.png" alt="button-no-prop"/>
</div>

Hmm interesting... It looks like our button is still showing click me. Let's see why!

Open the `Button.js` file located in the `components` folder, you should see the following:

```jsx
import React from 'react'

function Button() {
  return <button>Click Me</button>
}

export default Button
```

Well this looks like a basic button, theres nothing special here! Let's change that...

In order for a component to have the ability to read `props`, we must tell the component to be aware of them. To accomplish this, add `props` to the `Button` function as an argument:

```js
import React from 'react'

function Button(props) {
  return <button>Click Me</button>
}

export default Button
```

Let's add a `console.log` to see what exactly is `props`:

```jsx
import React from 'react'

function Button(props) {
  console.log(props)
  return <button>Click Me</button>
}

export default Button
```

You should see the following in your console:

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_lesson_react_props/button-props-log.png" alt="button-props-log"/>
</div>

Let's talk about what happened here:

- When we provide `props` to a component like we did in `App.js`, React takes that `prop name` and `prop value` and turns them into an object.
- It interprets the `prop name` as the key
- It interprets the `prop value` as the value for the desired key.
- As we add more props, React will continuously add them to the `props` object as long as we don't pass in duplicate names/keys.

So if `props` is an object, how can we access the information we provided? Let's find out.

In `Button.js`, let's replace the current button text of `Click Me` with `{props.text}`:

```jsx
import React from 'react'

function Button(props) {
  console.log(props)
  return <button>{props.text}</button>
}

export default Button
```

Take a look at your browser and notice what the text inside of the button contains:

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_lesson_react_props/button-with-props.png" alt="button-with-props"/>
</div>

We'll talk about what role the `{}` syntax has in React in the next section.

## React Dynamic Props and Data

In the previous section, we used a hard coded prop to display some `text` in our button. In this section we'll discuss and practice using the `{}` syntax to pass variables and other kinds of data to components.

### What role does the `{}`syntax play.

In the previous section, we used `{}` to add something in between our opening and closing `button` tags. The `{}` symbol is something that you may be familiar with from our time with vanilla Javascript.

Let's take a step back and analyze the following code:

```js
let myName = 'Billy Jean'
const welcomeMessage = `My name is ${myName} and I was made famous in a song called Billy Jean!`

console.log(welcomeMessage)
// => Logs: My name is Billy Jean and I was made famous in a song called Billy Jean!
```

A few questions you may want to ask:

- What role does `${}` play?
- What can we provide to `${}`?
- What is the expected result from this code?

Let's take a look at one more example:

```js
const buttonContainer = document.querySelector('.button-container')

let songTitle = 'Smooth Criminal'

buttonContainer.innerHTML = `<button>Play ${songTitle}</button>`
```

Again:

- What role does `${}` play?
- What can we provide to `${}`?
- What is the expected result from this code?

You can view an example of the output **[HERE](https://codepen.io/anpato/pen/ExvBpmQ)**.

In both of these scenarios, the `${}` syntax came in handy to pass `variables` in to some kind of element or string. Believe it or not, the same applies in the world of React. Specifically the `{}`. This tells the React compiler that some kind of `variable`, `number`, `float` or `boolean` goes in this space.

In the provided `Button.js` example, we had the following code:

```jsx
import React from 'react'

function Button(props) {
  console.log(props)
  return <button>{props.text}</button>
}

export default Button
```

We established that `props` was an object containing a `text` property that we provided from `App.js`.
We are essentially telling the React compiler that some kind of `variable` goes in this element with the `{}` syntax.

Let's try another example.

In your `App.js`, create a variable of `buttonText` with a value of `"Awesome Button"` above the `return` statement:

```jsx
import './App.css'
import Button from './components/Button'
function App() {
  const buttonText = 'Awesome Button'
  return (
    <div>
      <Button text="Awesome Button" />
    </div>
  )
}

export default App
```

Next let's substitute the `text` value currently being passed to our `Button` component with the `buttonText` variable. Remember, whenever we pass some kind of `javascript`, we need to use the `{}` syntax:

```js
import './App.css'
import Button from './components/Button'
function App() {
  const buttonText = 'Awesome Button'
  return (
    <div>
      <Button text={buttonText} />
    </div>
  )
}

export default App
```

Let's check out our browser and you should see the same text being displayed in our button. During your free time, experiment with the `buttonText` value and observe the changes to your button!

### Passing functions as props

During the beginning of the lesson, we discussed how we could also pass `functions` as props. Let's give that a try.

In your `App.js`, let's define a function called `alertUser` that set's an `alert` with the message of `Button Pressed`:

```jsx
import './App.css'
import Button from './components/Button'
function App() {
  const buttonText = 'Awesome Button'

  const alertUser = () => {
    alert('Button Pressed')
  }

  return (
    <div>
      <Button text={buttonText} />
    </div>
  )
}

export default App
```

Next let's pass this function to our `Button` component with a prop name of `handleClick`:

```jsx
import './App.css'
import Button from './components/Button'
function App() {
  const buttonText = 'Awesome Button'

  const alertUser = () => {
    alert('Button Pressed')
  }

  return (
    <div>
      <Button text={buttonText} handleClick={alertUser} />
    </div>
  )
}

export default App
```

Finally, let's access the `handleClick` prop from `Button.js` and set it to an `onClick` attribute for our button:

```jsx
import React from 'react'

function Button(props) {
  console.log(props)
  return <button onClick={props.handleClick}>{props.text}</button>
}

export default Button
```

Give your button a try!

## Recap

In this lesson, we discussed and implemented passing `props` to components. Props can be any kind of information so long as it follows a general set of rules:

- We access `props` with a `props` argument in a component.
- We can provide a `prop` to an element with the `{}` syntax.
- Props can be anything in React, even other components!

## Resources

- [React: Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Props for beginners](https://javascript.plainenglish.io/react-components-and-props-explained-for-non-devs-d801399ed429)
