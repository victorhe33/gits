# Working with the DOM

![Dom Toretto](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FfRQUcrKIRUqeA%2Fgiphy.gif&f=1&nofb=1)

## Overview
Can you really _manipulate_ The DOM though?

Yea I didn't think so... Thankfully we're not talking about _that_ Dom.

Today we're going to be practicing DOM manipulation and event handling. Rather than hard-coding HTML and CSS to affect the necessary changes to Dom's website, we'll be doing it all in JavaScript!

## Getting Started
- `Fork` and `clone` this repository
- `cd` into the directory on your local machine
- Run `open index.html` to open the website in your browser and `cmd + option + i` (MacOS) or `ctrl + shift + i` (Windows/Linux) to open your dev tools

## Setup

You're provided a basic website with included `index.html`, `style.css`, and `script.js`. All of your work will go in `script.js` - you shouldn't have to edit `index.html` or `style.css`. 

- HINT: Remember that you can select the children of an element with multiple selectors. Example: `.someClass li` will select all of the list items within `someClass`
- Be specific when googling information you might need to solve a problem

## Accessing DOM Elements (Querying)

Let's start with some simple query selecting.

#### Part 1

DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the `#main-title` ID element. Remember there are a couple of ways to query **id**. Change the **text** of the title to something shorter.

#### Part 2

Select the `body` and change the background-color to a new color of your choice.

#### Part 3

Select **DOM's Favorite Things** list and remove the last list item.

#### Part 4

Select all `.special-title` class elements and change their `font-size` to `2rem`. Remember you might have to iterate through the list of elements

#### Part 5

Turns out DOM never raced in **Chicago**. Access the **Past Races** list and remove **Chicago**.

![Michelle](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmtv.mtvnimages.com%2Furi%2Fmgid%3Afile%3Ahttp%3Ashared%3Amtv.com%2Fnews%2Fwp-content%2Fuploads%2F2015%2F01%2Ftumblr_mii9ovR0MY1s28t2ko1_500-1421264888.gif&f=1&nofb=1)

## Creating New DOM Elements

#### Part 6

Let's add to DOM's **Past Races** list. Create a new `<li>` element, change the new `<li>` text to the name of a city, and append it to the **Past Races** list.

#### Part 7

Create a new `.blog-post` corresponding to the new city added in **Part 6**. You will have to create a new `<div>` with class of `.blog-post`, a new `<h1>` with text, and a new `<p>` with some text. Make the new element consistent with the other posts. Think about what order you want to create the elements, and what order you want to append them in.

## Requirements
- Parts 1 - 7 fully completed

![Walker](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FWPvCzLY9u96wM%2Fgiphy.gif&f=1&nofb=1)

## Submission Guidelines

- PR must be submitted utilizing these guidelines: [PR Guidelines](https://github.com/SEI-R-2-22/template_pull_request)

## Resources
- This [DOM Gist](https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86) has a helpful section on DOM querying and creation
- [Goodnight Sweet Prince](https://www.youtube.com/watch?v=5KnFcsSIzbg&ab_channel=Movieclips)
