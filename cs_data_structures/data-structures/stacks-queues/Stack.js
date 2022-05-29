// Construct a Node
class Node {
  constructor(data, next = null){
      this.data = data;
      this.next = next;
  }
}

// Linked List Implementation
class StackLL {
  constructor(){
    // Linked Lists need a head
    this.head = null;
  }

  push(data){
    // Add an item to the end of the list
    // O(1)
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  pop(){
    // Remove an item from the end of the list and return it
    // O(1)
    const data = this.head.data;
    this.head = this.head.next;
    return data;
  }

  peek(){
    // Check the last item added to the list
    // O(1)
    return this.head.data;
  }

  isEmpty(){
    // Check to see whether or not the list is empty
    // O(1)
    return this.head === null;
  }

  printStack(){
    // Print all list items
    // O(n)
    let current = this.head;

    while (current) {
      console.log("node: ", current.data);
      current = current.next;
    }
    console.log('_____________________________________________');
    console.log('');
  }
}

// Array Implementation
class StackArr {
  constructor(){
    this.items = [];
  }

  push(item){
    // Add an item to the end of the list
    // O(1)
    this.items.push(item);
  }

  pop(){
    // Remove an item from the end of the list and return it
    // O(1)
    return this.items.pop();
  }

  peek(){
    // Check the last item added to the list
    // O(1)
    return this.items[this.items.length - 1];
  }

  isEmpty(){
    // Check if the list is empty or not
    // O(1)
    return this.items.length === 0;
  }

  printStack(){ 
    // Print all list items 
    // O(1)
    console.table(this.items);
    console.log('');
  } 
}

const myStack = new StackArr();

console.log(myStack);

myStack.push({movement: 'white pawn E2 to E4'}); 
myStack.push({movement: 'black knight B8 to C6'});
myStack.push({movement: 'white pawn D2 to D3'});
myStack.push({movement: 'black knight C6 to B4'});
myStack.push({movement: 'white pawn A2 to A3'});
myStack.push({movement: 'black knight B4 to D3 captures white pawn'});
myStack.push({movement: 'white queen D1 to D3 captures black knight'});
myStack.push({movement: 'black pawn D7 to D6'});
myStack.push({movement: 'white bishop F1 to E2'});
myStack.push({movement: 'black pawn G7 to G6 '});
myStack.push({movement: 'white bishop E2 to G4'});
myStack.push({movement: 'black biship C8 to G4 captures white bishop'});
myStack.printStack();
console.log("Last Move: ", myStack.peek());
console.log('');
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.printStack();
console.log("Last Move: ", myStack.peek());


