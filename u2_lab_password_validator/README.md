# React Password Validator

![Password](https://securityintelligence.com/wp-content/uploads/2018/10/si-eight-character-password-feature.jpg)

## Overview

In this lab, we'll recreate a password validator in React. Your final product should function like [this deployed version](https://password-validator-demo.herokuapp.com/) of the component.

## Getting Started

- `Fork` and `clone` this repository
- `cd` into the new directory
- `npm install` to install our dependencies
- open the project in VSCode with `code .`
- run `npm start` to spin up our app

## Instructions

Take the existing markup rendered from the `Validator` component in [`src/Validator.jsx`](src/Validator.jsx) and change into a fully functioning component. 

## Steps

1. Add and initialize state for your form. Your state should include `username`, `password`, `passwordConfirm`, and `valid` properties.
2. Add a method for handling each input's onChange event.
3. Add a method to handle the form submission. Remember to **prevent the default** behavior of a form being submitted with `e.preventDefault()`.
4. Display a message if the user's inputs are valid or invalid.

## Bonus

- Add a class of `invalid` or `valid` to the message conditionally (CSS already exists).
- Add a cancel button that clears the fields when clicked. There is a cancel class you can add to the button to make it display red. (hint: make sure it has `type="button"`).
- Update the validation message any time the user types something in the confirmPassword input.
- Make sure passwords are at least 7 characters in length.
- Make sure passwords includes a number and a special character. (Check out [Regex](http://emailregex.com/) if you're brave)

## Resources

- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [Forms in React](https://facebook.github.io/react/docs/forms.html#controlled-components)
- [Components and Props](https://facebook.github.io/react/docs/components-and-props.html)
- [Adding State to a Component](https://reactjs.org/docs/hooks-state.html)
