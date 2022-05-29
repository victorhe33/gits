## Stacks and Queues

![](https://imgs.developpaper.com/imgs/3169162767-5c88cc850daa1_articlex.jpg)

Stacks and queues are defined by their behavior — in other words, how items are added to and removed from them:


| Stacks |  Queues |
| --- | --- | 
|Operate on “last-in, first-out” (aka, LIFO) behavior. The last, most recently added item, is the first to be removed.	|Operate on “first-in, first-out” (aka, FIFO) behavior. Items are removed in the order they were added, from first to last.|
| Insertion and deletion in stacks takes place only from one end of the list called the top. | Insertion and deletion in queues takes place from the opposite ends of the list. The insertion takes place at the rear of the list and the deletion takes place from the front of the list. |
| Insert operation is called push operation. | Insert operation is called enqueue operation. |
| Delete operation is called pop operation. | Delete operation is called dequeue operation. |
| In stacks we maintain only one pointer to access the list, called the top, which always points to the last element present in the list. | In queues we maintain two pointers to access the list. The front pointer always points to the first element inserted in the list and is still present, and the rear pointer always points to the last inserted element. |
| Stacks are used in solving problems involving recursion. | Queues are used in solving problems involved with sequential processing. |


Let's break down a few of the ways that Stacks and Queues are implemented and discuss when might be the best situations for using them.

___
## Stacks

<img height="400" src="https://www.thecrazyprogrammer.com/wp-content/uploads/2016/04/Applications-of-Stack-660x474.png" alt="stack" />

A stack is a collection that is based on the last-in-first-out (LIFO) policy. By tradition, we name the stack insert method `push()` and the stack remove operation `pop()`. We also include a method to test whether the stack is empty.

How would we build a stack?
- Arrays
- Linked Lists

Both are are great options for implementing a stack! Now, what are stacks typically used for?

### Practical Use Cases
Stacks help us allocate memory, parse and run code, add a way to undo the last action, etc. They're behind a bunch of very important algorithms, and they're the mechanism by which the CPU runs your code. Without stacks we would be doomed.

- Undo Operations - Stacks are used for the undo buttons in various softwares. The recent most changes are pushed into the stack. Even the back button on the browser works with the help of the stack where all the recently visited web pages are pushed into the stack.

- Expression Evaluation - Stacks are used to evaluate prefix, postfix and infix expressions. Stacks can also be used to convert one form of expression to another.

- Syntax Parsing - Many compilers use a stack for parsing the syntax of expressions, program blocks etc. before translating into low level code.

- Backtracking - Suppose we are finding a path for solving maze problem. We choose a path and after following it we realize that it is wrong. Now we need to go back to the beginning of the path to start with new path. This can be done with the help of stack.

- Parenthesis Checking - Stacks are used to check the proper opening and closing of parenthesis.

- String Reversal - Stacks are used to reverse strings. We push the characters of a string one by one into a stack and then pop each character from the stack.

___
## Queues

<img height="400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/1920px-Data_Queue.svg.png" alt="queue" />

A queue supports the insert and remove operations using a first-in first-out (FIFO) discipline. By convention, we name the queue insert operation `enqueue` and the remove operation `dequeue`.

How would we build a queue?
- Arrays
- Linked Lists

Both work perfectly fine with building a queue. Where would a queue be a useful data structure?

### Practical Use Cases
Queues are used for any situation where you want to efficiently maintain a First-in-first out order on some entities. These situations arise in every type of software development, so you'll be interacting with queues quite often!

- Servers - Imagine you have a website which serves files to thousands of users. You cannot service all requests, you can only handle say 100 at once. A fair policy would be first-come-first serve: serve 100 at a time in order of arrival. A Queue would definitely be the most appropriate data structure.

- CPU Scheduling - In a multitasking operating system, the CPU cannot run all jobs at once, so jobs must be batched up and then scheduled according to some policy. Again, a queue might be a suitable option in this case.

- File Uploading - Queues are used with printers and uploading images. The first image/file entered is the first to be processed.

- Breadth First Search - Breadth First Search is a recursive algorithm for searching all the vertices of a graph or tree data structure. Queues can be used to make this algorithm more efficient.

___
## Code Implementation
Let's take a look at some of the different implementations of stacks and queues in `Stack.js` and `Queue.js`.

## Resources
- [Geeks for Geeks Stack Data Structure](https://www.geeksforgeeks.org/stack-data-structure/)
- [Geeks for Geeks Queue Data Structure](https://www.geeksforgeeks.org/queue-data-structure/)