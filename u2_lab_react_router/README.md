# React Router Lab

![Directions](https://cdn.pixabay.com/photo/2017/07/27/04/15/directions-2543956_640.png)

## Overview

In this lab, you'll be utilizing React Router to create a multi page app. Two json files have been provided for you in the `src/data` folder. `React Router` has been installed in this project for you.  This lab was built with *functional components*.

## Getting Started

- `fork` and `clone` this repository
- `cd` into the repo directory
- `npm i` or `npm install` to install our dependencies
- `npm start` to spin up our app

## Requirements

- You must have a page to display when your app loads. The `url` for this component should be `/`.
- You must have a page to display all games. The `url` for this component should be `games`.
- You must have a page to display all genres. The `url` for this component should be `genres`.
- You must have a page to display the details about a game. The `url` for this component should be `games/:game_id`.
- **Your app must be styled**

## Instructions

1. Set up your `BrowserRouter` in the `index.js` file.
2. Create a `Home` component. This component can display anything you'd like.
3. Create a `Games` component. Load your `games.json` file into this component. Use `useEffect` and `useState` to set the items inside of `games.json` to state.
   Map through your games in state and display them on the page.
4. Create a `Genres` component. Import the `genres.json` file into this component. Utilize `useEffect` and `useState` to set the list of genres to state.
5. Create a `GameDetails` component that has a more detailed view of a game. You'll want to capture the `id` in the url bar. Set up some state for this component that looks like the following:

   ```js
   const [gameId, setGameId] = useState('') // should be the id in the url bar,
   const [game, setGame] = useState(null) // Should be null to start and later becomes an object with the selected game.
   ```

   - You'll want to access get the `id` from React Router's `useParams` hook.
   - Add a `useEffect` to this component. You should use a `higher order array method` to find a movie where the id matches what is in state. You may need to parse the id into an integer.
   - Display the selected movie in this component.

6. In `App.js`:
   - Import the provided `Nav` component and add it to your `App.js`. This component should be used before any routes. NOTE: This component **will not work** until *after* you've set up `BrowserRouter` in the `index.js` file.
   - Set up a `<Routes/>` for your routes.
   - Add in the routes for each page according to the requirements above.
   - Don't forget to import `Routes` and `Route`: **`import { Routes, Route } from 'react-router-dom'`**
7. Style your app! Create a `css` file in the `styles` folder.

## Resources

- [React Router Docs](https://reactrouter.com/docs/en/v6)
- [React Router useParams](https://reactrouter.com/docs/en/v6/api#useparams)
