# Mapping and Nesting Components In React

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1605673598381/Z7_RAIiQz.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress)

## Overview

In this lesson, we'll learn how to take a data set and utilize the `.map` method to return multiple components to display in our application. `.map` is one of the most useful array methods in the React eco system as it allows us to create one component to display multiple pieces of information.

## Objectives

By the end of this, students should be able to:

- Nest components
- Create a list component utilizing `.map()`

## Getting Started

To start this build out, begin by creating a new React project:

- Fork and Clone
- `cd` into the directory and run `npm install`
- Create a `components` folder in the `src` directory.
- Open your project up in VS Code
- Run `npm run start` to start your development server

## Creating Parent Components

Start by creating two components `LeftSidebar`, and `RightSidebar` in the `components` directory.

**Don't forget to export your components!**

---

Add the following jsx in `LeftSidebar`:

```jsx
return (
  <div className="left">
    <h1>This is the left sidebar</h1>
    <p>No Children Here</p>
  </div>
)
```

---

In `RightSidebar` accept props as an argument and add the following jsx:

```jsx
return (
  <div className="right">
    <h1>Countries</h1>
    {props.children}
  </div>
)
```

---

## How Children Are Interpreted

In the previous section we used something called `props.children`. The `children` prop is built into the React ecosystem. At a high level, it's a special prop that tells a component to accept something inside of it.

### Dissecting Children

`props.children` acts as a placeholder within a component to tell the React interpreter that some kind of `jsx` or `component` will be put inside of this component in the specified area. Think of `children` as reserving a parking spot for a component.

When we use the `children` prop, we now have the ability to nest a component within another component in a parent/child relationship:

![ParentChild](https://sei-r.s3.amazonaws.com/u2_lesson_react_mapping_components/parent_child.png)

Notice in the example above, we are using multiple `Child` components, `props.children` allows us to place more than one component in the `children` spot. You also do not have to place a component as react see's this as just an empty tag.

### Adding The Sidebars

In `App.js`, import both the `LeftSidebar` and `RightSidebar` components:

```js
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
```

Next we'll display both of our sidebars:

```js
const App = () => {

  return (
    <div className="flex-row">
      <LeftSidebar />
      <RightSidebar></RightSidebar>
    </div>
  )
}
```

Notice the syntax for the `LeftSidebar` and `RightSidebar`. The `LeftSidebar` is using the self closing syntax while `RightSidebar` has an opening and closing tag.

This is for a couple of reasons:

- `LeftSidebar`
  - Does not accept children (since we did not declare it)
  - Our content was hard coded in
  - We can still use opening and closing tags, however we can not place anything inside of them as it will not be rendered.
- `RightSidebar`
  - Accepts children
  - Will dynamically insert content in the space where we declared `props.children`
  - Can be written using self closing tags, and use a the normal props syntax:
    - ```jsx
      <Example
        children={
          <div>
            <Child />
            <Child />
          </div>
        }
      />
      ```
  - The above can cause weird behaviors however, as now you have to provide an enclosing tag,
  - Using opening and closing tags is the preferred pattern.

## Mapping Data and Returning JSX

Now that we've added our sidebar components, we'll display some information.

In the `src` folder, create a `countries.js` file and add the following content:

```js
const countries = [
  {
    name: 'Scotland',
    population: 5463300,
    capital: 'Edinburgh',
    language: 'English'
  },
  {
    name: 'Brazil',
    population: 212688125,
    capital: 'Brasília',
    language: 'Portuguese'
  },
  {
    name: 'Egypt',
    population: 102674145,
    capital: 'Cairo',
    language: 'Arabic'
  },
  {
    name: 'Spain',
    population: 47450795,
    capital: 'Madrid',
    language: 'Spanish'
  }
]

export default countries
```

Next we'll import this file into `App.js`:

```js
import countries from './countries'
```

## Mapping Data

Now that we've loaded our data in to `App.js`, we'll use it to return a a list of countries and their capitals.

Inside of the tags for the `RightSidebar`, let's add in the following:

```jsx
<RightSidebar>
  <ul>
    {countries.map((country) => (
      <li>
        <h3>Country: {country.name}</h3>
        <h5>Capital: {country.capital}</h5>
      </li>
    ))}
  </ul>
</RightSidebar>
```

Break Down:

- We're going to display a list of countries inside of a `ul`
- We use the `{}` notation to tell the React compiler that the next bit of code is JavaScript
- We utilize the `.map` method on the `countries` data which will in turn give us access to each country object.
- We then utilize the `()` syntax to return multiple jsx elements without having to use the `return` keyword.
- Finally, the capital and country name are provided to each `li` element with heading tags.

At this point, we can check our browsers and open the console, you'll see the following warning/error:

![Key Warning](https://sei-r.s3.amazonaws.com/u2_lesson_react_mapping_components/key_warning.png)

This warning/error is not a breaking one, which means that your application will still run. However the performance will take a hit in larger applications.

#### What are keys and why do we need them?

The `key` prop is a special property that react uses to keep track of what order elements from an array are displayed/rendered. Essentially, think of each key as a number for the deli counter at your local supermarket. It keeps track of the next person/element in line.

A few rules for keys:

- Keys must be unique, (this is how react keeps track of order)
- Keys are attached to the parent containing element inside of the `.map`, in our example `li`.
- We can use an `index` as a key, however this is discouraged due to indexes being unstable (they can change). When working with real data, we'll typically have a unique id for each item.
- You can use any unique reference as a key. In our countries example, each capital is unique so we can use those as well.

#### Implementing Keys

To implement this `key` prop, we can simply attach it to the containing parent, in our case `li`. Modify your `.map` to the following:

```jsx
{
  countries.map((country) => (
    <li key={country.capital}>
      <h3>Country: {country.name}</h3>
      <h5>Capital: {country.capital}</h5>
    </li>
  ))
}
```

If you refresh your browser, you'll notice the warning has now disappeared and we are free to continue working.

### Mapping Components

During the previous section, we learned how we can map through some data and return some `jsx`. In this section, we'll adapt the `.map` to return a component instead.

In your `components` folder, create a new component called `CountryItem`. This component will accept `props` as an argument.

**Don't forget to export your component!**

Add the following `jsx` to your `CountryItem`:

```jsx
return (
  <li className="country-item" id={props.name}>
    <h3>Country: {props.name}</h3>
    <h5>Capital: {props.capital}</h5>
  </li>
)
```

Next import your `CountryItem` into `App.js`:

```js
import CountryItem from './components/CountryItem'
```

Our next step is to utilize `.map` to return a `CountryItem` instead of our `li`. Comment out the current `.map`:

```jsx
{
  /* {countries.map((country) => (
            <li key={country.capital}>
              <h3>Country: {country.name}</h3>
              <h5>Capital: {country.capital}</h5>
            </li>
          ))} */
}
```

**Hint: You can use <kbd>cmd</kbd> + <kbd>/</kbd> if your're on a mac or <kbd>ctrl</kbd>+<kbd>/</kbd> if you're on linux/windows to comment out a section of code.**

We'll add the following jsx below the commented out code:

```jsx
{
  countries.map((country) => (
    <CountryItem capital={country.capital} name={country.name} />
  ))
}
```

**Don't forget your key!**

```jsx
{
  countries.map((country) => (
    <CountryItem
      key={country.capital}
      capital={country.capital}
      name={country.name}
    />
  ))
}
```

If you check your browser, you'll see that our countries are still displayed but with some nicer styling!

## Recap

In this lesson, we:

- Learned how to nest multiple elements inside of a component using the `children` prop.
- Utilize `.map()` to iterate over some data and return components/elements that can display each piece of data.
- We learned how `keys` play an important role in the react ecosystem.

## Resources

- [Embedding .map() in JSX (React Docs)](https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx)
- [Keys (React Docs)](https://reactjs.org/docs/lists-and-keys.html#keys)
- [Components and Props (React Docs)](https://reactjs.org/docs/components-and-props.html)
- [Additional Mapping Components Reading](https://coursework.vschool.io/mapping-components-in-react/)
