# React Movie Mapping

![movies](https://static.wikia.nocookie.net/fictionaltvstations/images/4/4b/At_the_Movies.jpg/revision/latest?cb=20171002160046)

## Overview

We'll be building a simple movie application that renders movies and genres to practice mapping over components and passing data with props. You'll be creating 2 new components to accomplish this.

## Getting Started

- `Fork` and `Clone` this repository
- `npm install` to install our dependencies
- `npm start` to spin up our app
- `cd` into the src directory and `mkdir components` to create a folder for our components

## Instructions
### Data
Within the data folder in `src` take a close look at the structure of the data in `movies.json`.
- What does this data look like?
- What sort of information can we get about each movie?

Import the data from `movies.json` into `App.js`.
```js
import movieArray from './data/movies.json'
```

### Components
Next we'll need to create 2 components in the `components` folder. One component will be for an individual movie, while the other will be for the genres of a movie.
- In your `Movie` component, set it up to accept data from props and render it with JSX
- What data can be taken from the array of data in `movies.json`?
- You'll need at least a title, release date, overview, and image for each movie
```js
 import React from 'react'
 
 const Movie = () => {
    return (
      <div>
        // JSX for movie data from props here
      </div>
    )
  };

export default Movie;
```

Now we'll need to make a component for an individual `Genre` within the array of genres for each movie.
- Let's keep the JSX simple, since we'll only need to be taking in the name of the genre from props
- The important aspect of this component is _styling_, we want to know what each genre is at least by color
- In the JSX for rendering a genre name in the `Genre` component, we'll need to add in some conditional styling. A switch statement above our return may be useful here.
- After setting up a switch case to set a variable for colors associated with each genre name that could be coming in from props you'll need to apply it with _inline_ styling in the JSX
- To style inline, add a style prop on the tag you want to affect and open 2 curly brackets up. Styles are camelCased key value pairs with 'strings' for values. 
Just an Example:
```js
  let myColorVariable;
  switch(props.genre) {
    case 'some genre': 
      myColorVariable = someColor.associated.with.a.specific.genre
      break
    default:
      myColorVariable = 'some cool color'
  }

  return (
    <div>
      // EXAMPLE of inline styling without a variable
      <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{props.genre}</p>

      // EXAMPLE of inline styling WITH a variable
      <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{props.something}</p>
    </div>
  )
```

- Add a specific background color for each genre associated with the movies in `movies.json`

### Mapping
Now that you've completed both components, you'll need to `import` them both into `App.js` and map over the data array from movies.json to pass props to them
- After importing both components into `App.js` you'll need to start by mapping through the data array
- This can be done either in the return of `App.js`. Example for mapping in the return:
```js
  return (
    <div>
      {movieArray.map((movie, index) => (
        // Do something here inside the map
      ))}
    </div>
  )
```
- Inside your map, start by rendering a `<div>` as a wrapper for each movie and its associated genres
- Within the wrapper `<div>` render the `<Movie />` component and pass the necessary data from the array as props into the component
- Now comes the fun part, mapping over the nested array of genres for each movie!
- Below the `<Movie />` component and within the wrapper `<div>` start a new map method for the genres array of each movie and pass in the genre as props. Example:
```js
<div>
  {movieArray.map((movie, index) => (
        <div>
        // Movie component here

        // nested map here
        {movie.genres.map((genre, index) => (
          // Render each genre for a movie here by passing props into the Genre component
        ))}
        </div>
  ))}
</div>
```

- And with that, you've just rendered a nested array with mapping!
- Make sure to style each movie component to create a professional looking app

## Requirements
- All movies from `movies.json` should be rendered on the page
- All genres for each movie should be rendered on the page
- Each genre should have a unique color associated with it

## Submission Guidelines
- PR must be submitted utilizing these guidelines: [PR Guidelines](https://github.com/JSR-2-14/template_pull_request)
