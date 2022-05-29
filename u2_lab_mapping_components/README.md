# A React Contact List

![](https://media.giphy.com/media/63I6FXZTXks2A/giphy.gif)

## Overview

In this lab, you'll be building a contact list utilizing the provided data set.

## Objectives

- `map` through the data set to display a component for each piece of data.
- Utilize `props` to pass the data to other components

## What You'll Be Building

Here is what the finished application will look like:

![](https://media.giphy.com/media/YleV4Tht95MPtY01nW/giphy.gif)

## Getting Started

- `Fork` and `clone` this repository
- `npm i` to install dependencies
- Create a `components` folder inside of your `src` folder

## Instructions

### Step 1

- Find this list of contacts in your React App's file tree.
- Look at the data structure of the provided contacts.

### Step 2

- Import the contacts data into `App.js`
- ```js
  import contacts from './data/contacts.json'
  ```
- `console.log` contacts in `App.js` above its return to make sure that you've imported the data correctly

### Step 3

- Create a `Contact.js` file in your components folder.
- Analyze the provided mockup and decide what kind of jsx and `props` you'll want in this component.
- Import this component into `App.js`

### Step 4

- Using the provided contacts, iterate through the array and return a Contact component for each item.
- Provide props to your Contact component to display the data

**Don't forget your `keys`!**

### Step 5

- Use the `App.css` file to style your application, try to get as close to the mockup as possible.

### **Bonus**

- break up the `Contact` component into smaller components.
- Create your own creative version of this contact list.

## Recap

In this lab, we practiced mapping over a large set of data. We've taken the data provided to display an awesome contact list that others will certainly want to use!

## Resources
- [Components and Props (React Docs)](https://reactjs.org/docs/components-and-props.html#function-and-class-components)
- [Embedding .map() in JSX (React Docs)](https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx)
