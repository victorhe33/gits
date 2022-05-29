// Construct a Node
class Node {
  constructor(data, next = null, prev = null){
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

// Linked List Implementation
class QueueLL {
  constructor(){
    // To manage the front and rear of the list, we initialize it with a head and tail
    this.head = null;
    this.tail = null;
  }

  enqueue(data){
    // Adds an item to the back of the list
    const newNode = new Node (data, null, this.head);

    if (!this.head) {
        this.head = newNode;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
    }

    this.tail = newNode;
  }

  dequeue(){
    // Removes the first item added to the list and returns it
    const data = this.head.data;
    this.head = this.head.next;
    return data;
  }

  peek(){
    // Check the first item of the queue
    return this.isEmpty() ? 'Empty list!' : this.head.data;
  }

  isEmpty(){
    // Check if any items are remaining in the queue
    return this.head === null;
  }

  printQueue(){
    // Print all of the items in the queue
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
class QueueArr {
  constructor(){
    // Initialize the list as an empty array
    this.items = [];
  }

  enqueue(data){
    // Adds an item to the back of the list
    this.items.push(data);
  }

  dequeue(){
    // Removes the first item added to the list and returns it
    return this.items.shift();
  }

  peek(){
    // Check the first item of the queue
    return this.isEmpty() ? 'Empty list!' : this.items[0];
  }

  isEmpty(){
    // Check if any items are remaining in the queue
    return this.items.length === 0;
  }

  printQueue() {
    // Print all of the items in the queue
    console.table(this.items);
    console.log('');
  }
}


const myQueue = new QueueArr();

myQueue.enqueue({request: 'GET /api/users'});
myQueue.enqueue({request: 'POST /api/auth/register'});
myQueue.enqueue({request: 'POST /api/auth/login'});
myQueue.enqueue({request: 'GET /api/users/yt03948rt09384uo0983y4'});
myQueue.enqueue({request: 'PUT /api/users/yt03948rt09384uo0983y4'});
myQueue.enqueue({request: 'GET /api/posts/'});
myQueue.enqueue({request: 'GET /api/posts/b09di2je0vjasvs098wqr'});
myQueue.enqueue({request: 'DELETE /api/posts/b09di2je0vjasvs098wqr'});
myQueue.enqueue({request: 'POST /api/posts'});
myQueue.enqueue({request: 'GET /api/users'});
myQueue.enqueue({request: 'POST /api/users/follow/c7qw15u09as4du90u'});
myQueue.printQueue();
console.log('');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.printQueue();
console.log("First In Line: ", myQueue.peek());

