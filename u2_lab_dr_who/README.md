# Doctor Who's Police Box

![Doctors Box](https://i.pinimg.com/736x/b4/a4/fb/b4a4fb83cc020ecddeb08c04af1fe2f3.jpg)

## Overview

Doctor Who's Police Box is a T.A.R.D.I.S (Time and Relative Dimension In Space), a fantastical space ship that can fly through time and space and other mind-bending-ly impossible situations. It can go _anywhere_.

Today, you're going to help the T.A.R.D.I.S. navigate through a React App in the form of an object

```js
tardis = {
  name: 'Time and Relative Dimension in Space',
  caps: false,
}
```


## Getting started

- Clone this repo and cd into it.
- Run `npx create-react-app tardis` and cd into that app to get started.

## Instructions

To aid in visualization here is some css.
Every div will have a blue border and have some space around it for easy distinction between divs.

```css
@import url('https://fonts.googleapis.com/css?family=Poppins');

body {
  margin: 1em;
  padding: 1em;
  font-family: 'Poppins', sans-serif;
  background: #FEFFE9;
  text-align: center;
}

div {
  margin: auto;
  width: 80%;
  box-shadow: 0 0 8px dodgerblue;
  padding: 1em;
  background: white;
}
```
![css visual](https://i.imgur.com/3e0aPea.png)


- Remove excessive code from `App` component class
- render a `div`
- inside the `div`, put an `h3` that will render the `name` property from the state

T.A.R.D.I.S. properties inside state:
```js
tardis: {
  name: 'Time and Relative Dimension in Space',
  caps: false,
}
```

- Add a function that gets called on click and changes the text
- On click, the text will change from caps to lower case and change the caps property.
- Get the click function to work

### Creating New Components
- These new components tiny and you'll be working between them. It's ok to do this all in one file `App.js`.

1. Create a New Function Component `DivOne`
- have it render a div
- move the h3 to inside the div in this component
- work on passing the data from state down
- work on getting the click function work properly

2. Create a New Function Component `DivTwo`
- have it render a div
- move the h3 to inside the div in this component
- work on passing the data from DivOne down
- work on getting the click function to work properly

3. Create a New Function Component `DivThree`
- have it render a div
- move the h3 to inside the div in this component
- work on passing the data from DivTwo down
- work on getting the click function to work properly

4. Create another `DivThree` Inside `DivTwo`
- how should it render?
- will the function affect one or both divThrees?
- should it affect one or both?
- refactor your code so that each tardis is updating independent of the other one, if it isn't already

![nearly finished](https://i.imgur.com/efZ6fZG.png)

