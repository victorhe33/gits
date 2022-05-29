# Introduction to CSS

![css-image](https://www.tutorialrepublic.com/lib/images/css-illustration.png)

## Overview

So far we've learned how to set up and structure a HTML file. Now we'll make it look pretty! This an introductory lesson to CSS. We'll touch on very basic topics ranging from positioning to coloring!


CSS is how webpages are styled. Period. If you've seen something on the web, CSS is how it has been styled. Which means the sky is the limit with it, and there are countless ways to work with it. We are going to start off simple - if you are a complete beginner don't get too overwhelmed by its potential. As we continue on with our lessons, labs, assignments, and projects, make a note of how much you are progressing, and how much you have learned each week!

You will not be the Da Vinci of CSS by the end of this lesson. But 12 weeks from now, when you are presenting your capstone project, you will be amazed at how much you are able to do.

## Objectives

- Learn how to link stylesheets
- Learn how to position elements
- Learn parent child relationships
- Learn CSS specificity

## What You'll Be Building

![final](Capture.png)

## Getting Started

- Fork and Clone this repository OR you can start from the code we made in the HTML lesson
- Open this lesson in your code editor
- Open the `index.html` file in your browser (Refer to the prior lesson on how to do so)

## What Is CSS?

![Cascade](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F31.media.tumblr.com%2Fcd2ca2396c0bd6251170ef25810ef755%2Ftumblr_mu1nvtnk9e1s85u2fo1_500.gif&f=1&nofb=1)

CSS stands for `cascading style sheets`. This means that when the file is read, it is being read from top to bottom. (We'll see how this works in just a bit)

> CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
>
> CSS saves a lot of work. It can control the layout of multiple web pages all at once.

### Why CSS?

From W3Schools:

> HTML was NEVER intended to contain tags for formatting a web page!
>
> HTML was created to describe the content of a web page, like:
>
> - `<h1>This is a heading</h1>`
>
> - `<p>This is a paragraph.</p>`
>
> When tags like `<font>`, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.
>
> To solve this problem, the World Wide Web Consortium (W3C) created CSS.
>
> The style definitions are normally saved in external .css files.
>
> With an external stylesheet file, you can change the look of an entire website by changing just one file!

![Flair](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FV80llXf734WzK%2Fgiphy.gif&f=1&nofb=1)

## Applying Some Flair To Our HTML

You've been provided an `index.html` file, the contents may be familiar to you, we built it in the previous lesson!

First things first, let's create a `style.css` file in this lesson folder.
You can do this by either using the `touch` command:

`touch style.css`

Or by using the new file button in VSCode.

### Linking Our Stylesheet

In order for our `style.css` file to be used by our html file, we need to link the two of them together. We can accomplish this by using a `link` tag in our `index.html`.

Open your `index.html`, add the following to the head section in the HTML file:

```html
<link rel="stylesheet" href="./style.css" />
```

`rel` stands for *relationship*. The relationship of the linked file to our HTML page.

`href` stands for *hypertext reference*. The location of the file we're linking.

**NOTE**: Place this tag before the opening `title` tag in the HTML file.

Your `head` section should look like the following:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./style.css" />
  <title>Document</title>
</head>
```

#### Discuss (5 min)

Quick Questions:

- Why do we link CSS files in the head section?
- Can you link multiple CSS files?
- Can you link external CSS files?

### Applying Styles

Open your `style.css` file and add in the following:

```css
body,
html {
  margin: 0;
  padding: 0;
}
```

This is a basic CSS reset. By default padding and margins are applied to your HTML by the browser.

Let's style the `nav` element. Add the following to your CSS file:

```css
nav {
  background-color: #b39ddb;
  padding: 10px 0;
}
```

That color code is known as a "Hexidecimal" system, with 16 different characters (0-9, A-F) that we can use. The first 2 digits control the level of Red, the second 2 are for our Green values, and the last 2 control the Blue levels.  #000000 is the lowest value possibe - Black, while #FFFFFF is everything set to max - White. 

We also can use RGB values, which go between 0-255. (0, 0, 0) will be Black, (255, 255, 255) would be White, (255, 0, 0) will be Red. 
What color do we think (200, 200, 0) would resemble?

Additionally, we have the ability to use RGBA, using the "Alpha" value to set the opacity of our element. This value goes between 0 and 1, with 0 being fully transparent, and 1 being fully opaque. (255, 255, 255, 1) would be a strong, opaque White, while (255, 255, 255, .2) would be mostly transparent.

CSS has somewhere around 85 colors that can be called on by name, ranging from the common ("Blue", "Red", "Green"), to a bit more far-out ("Lemonchiffon", "Dodgerblue", "Azure"). Some colors you may be familiar with ("Cerulean") do not exist, and you will need to use RGB or Hexidecimal to get those specific colors. 

Notice the syntax for padding, this is shorthand for applying padding on an element. Padding, margin and a few other properties follow the convention of applying styles in a clockwise direction. For example:

```css
element {
  padding: 1px 2px 2px 1px;
}
```

This will apply padding from top, right, bottom, left.

![clock](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdata.whicdn.com%2Fimages%2F28395546%2Foriginal.gif&f=1&nofb=1)

In the case of our shorthand syntax, it combines the properties to apply them to the horizontal and vertical axis of the element.

### Styling The Nav Elements

You'll notice that our navigation links are not very pretty, let's fix that.

Add in the following styles:

```css
ul {
  list-style: none;
}

li {
  display: inline;
  margin: 0 10px;
}
```

With the `ul` selector, we are overriding the default styles for unordered lists.

By applying the `display:inline` property to the `li` elements, we are changing them from a block type element, which stacks vertically, to an inline element which stacks horizontally.

## You Do

Your task is to finish implementing the provided design.

- Center the text in the section
- Make both of the `div`'s with a class of `box` stack horizontally.
- Apply some color and borders to the boxes

Here are some links to help you along your journey:

- [Aligning Divs Side by Side](https://www.w3schools.com/cssref/pr_class_float.asp)
- [Aligning Text Center](https://www.w3schools.com/cssref/pr_text_text-align.ASP)
- [Applying Borders](https://www.w3schools.com/cssref/pr_border.asp)
- [Applying Background Colors](https://www.w3schools.com/cssref/pr_background-color.asp)

Keep in mind, class styling properties can be shared with multiple elements with the same class.

## Recap

In this lesson we touched on the basics of CSS. We linked our stylesheet and implemented some styling to our HTML.

There are easily hundreds of different functions we can do with our CSS. Some, like Keyframe Animations or Filters, are relatively new. There are new properties being developed all of the time. Like our HTML elements and Terminal commands, we do not expect you to memorize and fully understand every single one of these, but as we continue on in this class, we want you to take note of which commands you are using the most, which ones you find the most interesting, and any new ones you find interesting and want to show off. 

## Resources

- [W3Schools CSS Reference](https://www.w3schools.com/cssref/default.asp)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/default.asp)
