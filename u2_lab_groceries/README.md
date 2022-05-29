# React Groceries

![grocery bag](https://img.thrfun.com/img/095/445/reusable_shopping_bag_x1.jpg)

## Overview

In this lab, you will build an app that let's you make a list of groceries to buy.

## Getting Started

- Clone this repo and `cd` into it.
- Create your react app named `react_groceries`.
- `cd` into your new app and begin your work from there.


## Instructions

```js
{
  item: '',
  brand: '',
  units: '',
  quantity: 0,
  isPurchased: false
}
```

- Make an array of 3 objects using the above shape and render the item, quantity, and units (12 pack, 1lb, 2 liters, etc.)
- Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
- Add some style to your app
- **Stretch** Add a button that says 'remove' and when clicked the value of `isPurchased` is toggled

## Bonus
- Make multiple grocery lists (one for each family member) and have them update independently
- Sort your list alphabetically
- Create other ways to sort your data (i.e.: by quantity)
- Change the 'remove' button's functionality to actually remove the item from the list
- Add a 'later' button that toggles the CSS (gray text, strikeout etc.) if the item should be purchased later
- Expand your app to allow for images (the images should be an HTTP URL) and then render the image in your app - some images may take longer to load and not appear correctly, look into React life cycle events and/or lazy loading (if that is too much, just keep trying images. Some will work, and you can save life cycles/lazy loading for later)
