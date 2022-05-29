# Python Control Flow

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Malayopython_reticulatus%2C_Reticulated_python_-_Kaeng_Krachan_District%2C_Phetchaburi_Province_(47924282891).jpg/1280px-Malayopython_reticulatus%2C_Reticulated_python_-_Kaeng_Krachan_District%2C_Phetchaburi_Province_(47924282891).jpg)

## Overview

In this lesson, we'll be learning and implementing python control flow, and proper `indentation`.

## Getting Started
- `Fork` and `clone` this repository

## If/Else/ElIf

In python, we can perform logic utilizing `if`, `elif`, and `else` statements to check a condition. Each statement creates a `block`, and each block must be indented correctly or our code will fail to run. Whatever is declared inside of this block is only accessible within that `scope`. Common indentation in python is typically 1 tab or 2 spaces, here's an example:

```python
if 5 > 2:
    print('Yay')
elif 5 > 3:
    print('Ohhh')
else:
    print('Whoops')
```

Notice the syntax, in Python we use the `:` symbol to indicate the end of our condition. The code after is indented to declare a `block` or `scope`.

Here's a comparison between javascript if's and python if's:

| Javascript              | Python            |
| ----------------------- | ----------------- |
| `if(something){}`       | `if something:`   |
| `else if (something){}` | `elif something:` |
| `else {}`               | `else:`           |

As you can see they're quite similar, but syntactically different.

## `and`'s `not`'s and Everything Else

Python also has comparison operators such as `<` and `>`. Here's a list of python's comparison and logical operators with their js counterparts:

<table>
    <tr>
        <th>Javascript</th>
        <th>Python</th>
        <th>Operation</th>
    </tr>
    <tr>
        <td>!==</td>
        <td>!=</td>
        <td>Not Equal</td>
    </tr>
    <tr>
        <td>===</td>
        <td>==</td>
        <td>Equals</td>
    </tr>
    <tr>
        <td>></td>
        <td>></td>
        <td>Greater Than</td>
    </tr>
    <tr>
        <td><</td>
        <td><</td>
        <td>Less Than</td>
    </tr>
    <tr>
        <td>>=</td>
        <td>>=</td>
        <td>Greater Than Or Equal</td>
    <tr>
        <td><=</td>
        <td><=</td>
        <td>Less Than Or Equal</td>
    </tr>
    <tr>
        <td>!</td>
        <td>not</td>
        <td>Logical Not</td>
    </tr>
    <tr>
        <td>&&</td>
        <td>and</td>
        <td>Logical And</td>
    </tr>
    <tr>
        <td>||</td>
        <td>or</td>
        <td>Logical Or</td>
    </tr>
</table>

## Ternary Operators
Just like with JavaScript, python also has an option for creating ternary statements. Ternaries can be useful if you'd like a more concise method for writing conditional statements that only have 2 possible outputs for a certain expression.

With JavaScript, our ternary statements look like this:

```js
(someExpression) ? case1 : case2;
```

In python, ternaries are somewhat more legible. They are written by putting our cases to be output on both sides of an expression wrapped in an if/else. Example:

```py
value_if_true if some_expression else value_if_false
# The left side executes if the expression evaluates to True
# The right side executes if the expression evaluates to False
```

## You Do

Utilizing the above table, work in the `check_gpa` function in `main.py` and follow the instructions.

Run the `test_gpa.py` file to test your logic: `python3 test_gpa.py`. If everything is correct you'll have an `ok` message printed to your terminal.

## Recap
In this lesson we learned about control flow statements in Python 3 along with realizing how important indentation can be for them to work properly. A few key concepts to note:
- Python conditional statements are typically written in blocks of code following a colon `:`
- Instead of writing `else if()` like we would in JavaScript, in Python it is written as `elif`
- Logical operators like `&&`,`!`,`||` in JavaScript are written more semantically in Python: `and`,`not`,`or`
- Ternary statements can be written in Python by writing a conditional expression between an if/else with cases on each side for a True/False output of the expression

## Resources
- [Python If Else](https://pythonguides.com/python-if-else/)
- [Python Ternary Operators](https://book.pythontips.com/en/latest/ternary_operators.html)
