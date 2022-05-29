# React Hooks ATM

![ATM](https://media4.giphy.com/media/9rwJNLBu8FMfixoIxL/giphy.gif)

## Overview
In this lab, we'll practice modifying an existing codebase. This repository contains the code for an existing ATM application using React. In it, you can currently deposit money into a checking account.

## Objectives
- Add the ability to withdraw money
- Add the ability to have a savings *and* checking account

## What You'll Be Building
![ATM](https://i.imgur.com/5qtwSzM.png)

## Getting Started
- `fork` and `clone` to your machine
- `cd` into the directory
- `npm i` to install our dependencies
- `npm start` to spin up the app

## Your Task
Currently, you can see that there is a Checking account where a user can deposit money. Try it out - it already works!

We need to:
- Create a "Withdraw" button next to the "Deposit" button.
  - You ***should not*** be able to withdraw more than the current balance.
- Create a Savings account - another component of the same class.
  - It will have the same deposit (and eventual withdraw) functionality.
- You ***should not be able*** to use negative numbers to withdraw or deposit.

### Hints
<details>
<summary>Stuck on making a Savings account? Here's a hint:</summary>
The <code>name</code> prop being passed into <code>Account</code> is "Checking" - perhaps you can just call the component again for "Savings"?   
</details>

<details>
<summary>Stuck on making a Withdraw button? Here's a hint:</summary>
Functionality to withdraw money is quite similar to functionality for depositing money, except with subtraction instead of addition.
</details>

<details>
<summary>Stuck on limiting negative numbers? Here's a hint:</summary>
When a function checks if the input is a number (with <code>isNaN</code>), an <code>||</code> condition could be added to be sure the input is not less than 0.
</details>
