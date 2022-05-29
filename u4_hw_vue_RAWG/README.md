# Vue RAWG Router

<div>
  <img alt="rawg" src="https://i0.wp.com/operationrainfall.com/wp-content/uploads/2019/06/RAWG-Featured.jpg?fit=1920%2C1080&ssl=1" />
</div>

## Overview

We will be building a frontend website with Vue, Vue Router, and the RAWG API. We'll be getting practice with routing dynamically with `vue-router` elements and with making API calls with `axios` inside of Vue Lifecycle Methods. Try to think of this lab like a puzzle, where you'll be adding in the pieces we need to create a functioning website.

- [API Documentation](https://api.rawg.io/docs/)
- The endpoints (URL strings) we will be using with this API have been provided below. Starter code and component files have also been provided.

## Retrieving An API Key

Head over to this link [Here](https://rawg.io/apidocs) to get your own API key. You'll want to add this API key to a `.env` and add the `.env` file to your `.gitignore`.

### Endpoints

```js
[GET] Search `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`
[GET] Genres `https://api.rawg.io/api/genres?key=${API_KEY}`
[GET] Game Details `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
[GET] DLC `https://api.rawg.io/api/games/${gameId}/additions?key=${API_KEY}` (Bonus)
```

## Getting Started

- `Fork` and `clone` this repository
- `npm i` to install dependencies

### App Architecture

Let's take a look at the structure of the app we've just cloned. You've been provided with all of the components you'll need to complete this exercise.

<p align="center" >
  <img width="100%" alt="tree" src="https://i.ibb.co/w4qcBTC/Screen-Shot-2022-04-28-at-9-09-20-AM.png" />
</p>

**Note: The app will show an error until `Step 1` is complete.**

## Step 1: Setting Up Routes

Start by installing Vue Router:

```sh
npm install vue-router
```

Let's start with `main.js`.

**You can see that the router has already been wired up for you here. You'll just have to write your own routes.**

Head over to `router.js`. In here, we've scaffolded the Vue Router for you:

```js
import { createWebHistory, createRouter } from "vue-router"
import HomePage from './pages/HomePage'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import AboutPage from './pages/AboutPage'

const routes = []

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

You'll need to create your own routes and add them to the `routes` array utilizing the following table:

| Component   | Path              | Name          |
| ----------- | ----------------- | ------------- |
| HomePage    | /                 | 'HomePage'    |
| ViewGames   | /games            | 'ViewGames'   |
| GameDetails | /details/:game_id | 'GameDetails' |
| AboutPage   | /about            | 'AboutPage'   |

## Step 2: Setting Up The Router View

In `App.vue`, you're provided with the following:

```jsx
<template>
  <div id="app">
    <header>
      <!-- Nav Goes Here -->
    </header>
    <main>
      <!-- Router View Goes Here -->
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>
```

- You'll want to utilize the `NavBar` component and add it between the provided `header` tags. **Remember to import the NavBar component and add it to your `components` object.**
- Don't forget to use the `router-view` component as this is where our components will get rendered. You can add it in between the provided `main` tags.

## Step 3: Loading Initial Data

In `HomePage.vue`, you've been provided with a few methods and some initial state. In this component, you should fire an axios request that retrieves a list of genres in the `getGenres` method. This method should be invoked once the component is mounted and should update the genre state.

- Once you've retrieved a list of genres from your API, iterate through the genre state and return a `GenreCard` for each item.
- The `GenreCard` should accept the image and name of each genre as props. You'll need to wire these up in the `GenreCard` component following the included prompts.

## Step 4: Setting Up Search Functionality

In `HomePage.vue`, set up a form within the provided `search` classed tag. It should be displayed above the provided `h2`. This form should have an input and a button.

- The value of the input should be `searchQuery`
- `handleChange` should be used to update the `searchQuery` state
- The `@submit` event should fire the `getSearchResults` method which in turn should update the `searchResults` array.
- The `searched` state should be updated to `true` once the results are retrieved. If the the state is true, conditionally render the provided `div` with class of `genres` to be hidden. **The `!` operator may be useful here.**

## Step 5: Listing The Search Results

Now that we have the search results in state, you'll want to bring in the `GameCard` component in `HomePage.vue`. You should return a new card for each item in the `searchResults` array.

- You'll need to import the `GameCard` component.
- Pass the name and image of the game as props.
- Display these props in the noted sections within `GameCard`.
- Don't forget to declare which props it will be receiving.

## Step 6: Navigation To Game Details

Next we'll want to select a game and view the game details.

- Attach an `@click` event to the `GameCard` component, it should trigger the `selectGame` method.
  - **Hint: You can invoke the method to provide the `gameId` during the `@click` event.**
- The `selectGame` method should navigate you to `/details/:game_id`. The `game_id` parameter gets replaced with the provided `gameId` argument.
  - **Hint: `this.$router.someMethodThatNavigates` may be useful here.**

## Step 7: View Game Details

Once you've navigated to the `GameDetails` component, you can now start wiring the component to display some information.

- Utilize the `getGameDetails` method to make a request to retrieve the game information by the game id.
- Look at the props currently stored in the `Vue Devtools`. Utilize that to retrieve the `gameId` and provide it to the request.
- The `getGameDetails` method should be triggered once a component mounts.

Some JSX has been provided for you. You'll have creative freedom on what information to display here. The only requirements are the component must display:

- The cover image for the game
- The title of the game

Add a back button that allows you to go back to the home page.

## Bonus

Display a list of the game's most recent posts from its subreddit page in the `GameDetails` component.

Create two pages for `ViewPlatforms` and `PlatformDetails` to display the platform information available through the API.
- **Hint: This will likely require more components as well**

## Homework

For completion you must have:

- All parts of the lab completed **not including** the bonus. (Steps 1-7)
- Make the genres clickable, this should navigate you to a new page where it displays a list of games by that genre. (Hint: This will require a new route and axios call).
  - The API endpoint should resemble the following: `https://api.rawg.io/api/games?genres=<genreid>&key=<your key>`
- This page should display each game and it's rating prominently and users should have the ability to **sort** games by rating.
  - You should have a dropdown to sort the games either in descending or ascending order.
- This page must be professionally styled and match the theme of the current application.



### Super Duper Mega Doppler Bonus

Build the ability to paginate results for this page.
