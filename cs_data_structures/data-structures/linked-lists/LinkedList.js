// Construct Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Construced a Linked List of Nodes
class LinkedList {
  constructor(){
      // a Linked List starts with a "head" property intialized as null
      this.head = null;
      this.tail = null;
      this.size = 0;
  }

  appendNode(data){
    // O(1)
    // creates a new node with the given data and adds it to back of the list
    const newNode = new Node(data);

    // If there is no head yet let's make new node a head. 
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }

  prependNode(data){
    // O(1)
    // creates a new node with the given data and adds it to the front of the list
    // Make new node to be a head.
    const newNode = new Node(data, this.head);
    this.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    this.size++
    return this;
  }

  pop(){
    // O(n)
    // removes the last node from the list and returns it
    if(!this.head) return console.log('There is no head');
    if(!this.head.next) return this.removeFromFront();
    
    const deletedNode = this.tail;
    let current = this.head;
    let previous = null;

    while(current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.tail = previous;
    this.size--;
    return deletedNode;
  }

  removeFromFront(){
    // O(1)
    // remove the head node from the list and return it
    // the next node in the list is the new head node
    if(!this.head) return console.log('There is no head');
    
    const deletedNode = this.head;
    this.head = this.head.next;
    this.size--;
    return deletedNode;
  }

  insertAt(index, data){
    // O(n)
    // insert a new node into the list with the given data
    // place it after X nodes in the list
    // if X exceeds the bounds of the list, put the node at the end
    // insertAt(0, 7) would add the new node as the head
    if(index > 0 && index > this.size) return console.log('Index does not exist');
    if(index === 0) return this.prependNode(data);
    
    const newNode = new Node(data);
    
    let current = this.head;
    let previous = null;
    let count = 0;

    while(count < index) {
      count++;
      previous = current;
      current = current.next;
    }

    previous.next = newNode;
    newNode.next = current;
    this.size++;
    return this;
  }

  removeAt(index){
    // O(n)
    // remove the Xth node from the list, considering 0 to be the first node
    // return the node that has been removed
    if(index > 0 && index >= this.size || !this.head) return console.log('Index not found');
    if(index === 0) return this.removeFromFront();

    let current = this.head;
    let previous = null;
    let count = 0;

    while(count < index) {
      count++;
      previous = current;
      current = current.next;
    }

    const deletedNode = current;
    previous.next = current.next;
    this.size--;
    return deletedNode;
  }

  search(data){
    // O(n)
    // searches the list for a node with the given data
    // if it is found, return the "index" of the node, considering 0 to be the first node
    // if not, return false
    if (!this.head) return false;
    if (this.tail.data === data) return this.size - 1;

    let current = this.head;
    let previous = null;
    let count = 0;

    while(current.data !== data && count < this.size - 1) {
      count++;
      previous = current;
      current = current.next;
    }

    return current.data===data ? count : false;
  }

  sort(){
    // O(n)
    // sort the Linked List in ascending order of data values
    // current node will point to the head  
    let currentNode = this.head;  
    let nextNode = null;  
      
    if (this.head === null) return console.log('Cannot sort an empty list!');  

    while(currentNode !== null) {
      // nextNode will point to node next to currentNode  
      nextNode = currentNode.next;  
        
      while(nextNode != null) {
        // If currentNode node's data is greater than nextNode's node data, swap the data between them  
        if(currentNode.data > nextNode.data) {
          const temp = currentNode.data;  
          currentNode.data = nextNode.data;  
          nextNode.data = temp;  
        }  
        nextNode = nextNode.next;  
      }
      currentNode = currentNode.next;  
    }
    return this;
  }

  clearList() {
    // O(1)
    this.head = null;
    this.tail = null;
    this.size = 0;
    return this;
  }

  printList() {
    // O(n)
    let current = this.head;

    while (current) {
      console.log("node: ", current.data);
      current = current.next;
    }
    console.log('');
  }
}

const myList = new LinkedList();

myList.appendNode(400);
myList.appendNode(900);
myList.printList();
myList.prependNode(800);
myList.prependNode(3400);
myList.prependNode(7000);
myList.prependNode(300);
myList.printList();

const poppedNode = myList.pop();
console.log('poppedNode: ', poppedNode);
console.log('');

const shiftedNode = myList.removeFromFront();
console.log('shiftedNode: ', shiftedNode);
console.log('');
myList.printList();

myList.insertAt(3, 1500);
myList.insertAt(1, 250);
myList.insertAt(5, 600);
myList.printList();

const removedNodeAt = myList.removeAt(3);
console.log('removedNodeAt: ', removedNodeAt);
console.log('');
myList.printList();

console.log("Searching for 3400. Index found: ", myList.search(3400));
console.log("Searching for 3600. Index found: ", myList.search(3600));
console.log('');
myList.sort();
myList.printList();

console.log(myList);
