const Queue = require('./BFSQueue')

class AdjacenyListGraph {
  constructor() {
    // Create a property called `nodes` and set it equal to an empty object.
    // This will be our adjacency list.
    this.adjList = new Map();
    this.lastAdded = null;
    // The Map object holds key-value pairs and remembers the original insertion order of the keys. 
    // Any value (both objects and primitive values) may be used as either a key or a value
    // A Map iterates its elements in insertion order and returns an array of [key, value] for each iteration.
  }

  addNode(node) {
    // If the node value passed in does not already exist in our adjacency
    // list, then add it as a key and set it equal to an empty array.
    this.adjList.set(node, []); 
    this.lastAdded = node;
  }

  addEdge(node, edge){
    // If the node exists in our adjacency list, then push the edge into the
    // array of edges for that node.
    this.adjList.get(node).push(edge); 
    // Since graph is undirected, add an edge from the new edge to the node as well
    this.adjList.get(edge).push(node);
  }

  degree(node){
    return this.adjList.get(node).length
  }

  neighbors(node){
    return this.adjList.get(node)
  }

  bfs(startingNode){ 
    // create a visited object 
    const visited = {}; 
    // Create an object for queue 
    let vertexQueue = new Queue(); 
    // add the starting node to the queue 
    visited[startingNode] = true; 
    vertexQueue.enqueue(startingNode); 
    // loop until queue is element 
    while (!vertexQueue.isEmpty()) { 
      // get the element from the queue 
      let getQueueElement = vertexQueue.dequeue(); 
      // get the adjacent list for current vertex 
      let edgeList = this.adjList.get(getQueueElement); 
      // loop through the list and add the element to the 
      // queue if it is not processed yet 
      for (let i in edgeList) { 
          let neighbor = edgeList[i]; 
          if (!visited[neighbor]) { 
              visited[neighbor] = true; 
              vertexQueue.enqueue(neighbor); 
          } 
      } 
    } 
    return Object.keys(visited);
  } 

  dfs(startingNode){ 
    // key value store for all visited nodes (vertexes)
    const visited = {}; 
    // Recursive function which process and explore 
    // all the adjacent vertex of the vertex with which it is called 
    const traverse = (vertex, visited) => {
      visited[vertex] = true; 
      // console.log(vertex); 
    
      let neighbors = this.adjList.get(vertex); 
      
      for (let i in neighbors) { 
          let nextVertex = neighbors[i]; 
          if (!visited[nextVertex]) 
              traverse(nextVertex, visited); 
      } 
    }
    traverse(startingNode, visited); 

    return Object.keys(visited);
  } 
}

const myGraph = new AdjacenyListGraph(6); 
const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
  
// adding vertices 
for (let i = 0; i < vertices.length; i++) { 
    myGraph.addNode(vertices[i]); 
} 
  
// adding edges 
myGraph.addEdge('A', 'B'); 
myGraph.addEdge('A', 'D'); 
myGraph.addEdge('A', 'E'); 
myGraph.addEdge('B', 'C'); 
myGraph.addEdge('D', 'E'); 
myGraph.addEdge('E', 'F'); 
myGraph.addEdge('E', 'C'); 
myGraph.addEdge('C', 'F'); 

console.log(myGraph)

console.log('')
console.log('degree of vertex E:')
console.log(myGraph.degree('E'))
console.log('neighbors of vertex E:')
console.log(myGraph.neighbors('E'))

console.log('')
console.log('Depth First Search: ')
const depthFirst = myGraph.dfs('A')
console.log(depthFirst)

console.log(myGraph)
console.log('')
console.log('Breadth First Search: ')
const breadthFirst = myGraph.bfs('A')
console.log(breadthFirst)


