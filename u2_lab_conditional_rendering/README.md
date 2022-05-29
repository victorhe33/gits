# Conditional Rendering Lab

![Bale](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FcQhWrl1CrGD04%2Fgiphy.gif&f=1&nofb=1)

## Overview

In this lab, we'll be working with a provided sign-up form to conditionally render components based on the user's input.

## Getting Started

- `Fork` and `Clone`
- `cd` into `u2_lab_conditional_rendering`
- `npm i`

## Instructions

Using the provided components, create an environment where:

- The user will go through three "pages" of a sign up process (Landing, Form, Thanks OR Error)
- The buttons on each page will navigate the user through the process
- The `Next` button is not clickable unless all 3 fields on the form have user input
- The `Thanks` component renders when a user over the age of 18 signs up OR the `Error` component renders when a user under the age of 18 tries to sign up

## Notes/Tips

- Take a look at what is already provided in the app. Using the state we have, how could we decide which components to render under certain conditions?
- Consider the many conditional statements we've used throughout this course (if/else, switch, ternary). Which would be best for this situation?
- The app **_will not_** render any components until you've called them in the `Home.jsx` render statement...
- The **_majority_** of your work will be done in `Home.jsx`.

## Bonus

- Configure the `Back` buttons to reset the state and return to the welcome page. Maybe a helper method in the `App` component could be useful?
- Style it up!

## Resources
- [Disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled)
