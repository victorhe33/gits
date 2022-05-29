# React Likes

![like thumb](https://graphiccave.com/wp-content/uploads/2015/06/Facebook-Like-Thumb-Up-Icon-Free-Vector-PNG-Graphic-Cave.png)

## Overview

In this lab, you will create a likes component in React. Your final product should function similarly to
[this deployed version](https://react-likes.surge.sh/) of the component.

## Getting Started

- Clone this repo and cd into it.
- Create a new react app named `react_likes` in this directory.
- Change into your `react_likes` app and begin your work from there.

## Instructions

Create a new component called **Likes** in the `src` directory and add functionality to it so that when the render component it records the number of clicks in state and displays the total clicks.

- Use the `useState` hook to add state called `totalLikes` to the component to store the current number of clicks on the component.
- Initialize the `totalLikes` state as `0`.
- In your JSX, render a `button` element with it's text set to the value of `totalLikes`.
- Include an `onClick` attribute on the start button which calls a function that increments the value of `totalLikes`.
- Make a commit with a message that reads "Add MVP functionality"!

## Bonus

- Change the increment button to have a `+` as its text.
- Add another button that decrements the `totalLikes` and has a `-` as its text.
- Render the `totalLikes` to the page in a `p` element.
- Once you have the `totalLikes` displaying on the page, move just the display paragraph into its own component called **LikeTotal** and have the Likes component you built render it (hint: use props to pass the value of `totalLikes` to your new LikeTotal component).
- Make another commit with a message that reads "Add decrement button".
- Make it so that the `totalLikes` can never display a value less than `0`.