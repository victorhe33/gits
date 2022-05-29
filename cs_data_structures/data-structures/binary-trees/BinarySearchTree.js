class TreeNode {
  constructor(data){
    // a node has data, left, and right pointers
    this.data = data;
    // left and right are intialized as null
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor(data){
    // when a new Tree is made, it has a root property
    this.root = null;
  }

  insert(data){
    // add a new Node to the tree, with data as the Node's data
    const newNode = new TreeNode(data);                
    // root is null then node will 
    // be added to the tree and made root. 
    if (this.root===null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      // prevent duplicates
      if (data === current.data) {
        return;
      }

      // left node insertion
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      }

      //right node insertion
      if (data > current.data) {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  search(data){
    // search the Tree for a node with the given value
    // if the node exists, return it
    // if the node doesn't exist, return false
    let currNode = this.root;
    if (currNode===null) return false;
    while (currNode !==null) {
      if (currNode.data === data) {
         // Found the element!
         return currNode;
      } 
      else if (data < currNode.data) {
         // Go left as data is smaller than parent
         currNode = currNode.left;
      } 
      else {
         // Go right as data is greater than parent
         currNode = currNode.right;
      }
   }
   // node was not found, return null
   return null;
  }

  remove(root, data){
    // Base Case
    if (root === null) {
      return root;
    }
    // If the data to be deleted 
    // is smaller than the root's
    // data then it lies in  left subtree
    if (data < root.data) {
      root.left = this.remove(root.left, data);
    }
  
    // If the data to be delete d
    // is greater than the root's data
    // then it lies in right subtree
    else if(data > root.data) {
      root.right = this.remove(root.right, data);
    }
  
    // If data is same as root's data, then this is the node
    // to be deleted
    else {
      // Node with only one child or no child
      if (root.left === null) {
        let temp = root.right;
        root = null;
        return temp;
      }
  
      else if (root.right === null) {
        let temp = root.left;
        root = null;
        return temp;
      }
      // Node with two children: 
      // Get the inorder successor
      // (smallest in the right subtree)
      temp = this.minValueNode(root.right)
  
      // Copy the inorder successor's 
      // content to this node
      root.data = temp.data
  
      // Delete the inorder successor
      root.right = this.remove(root.right, temp.data)
    }
    return root
  }

  minValueNode(node){
    let current = node;
    // loop down to find the leftmost leaf
    while(current.left !==null) {
      current = current.left;
    }
    return current;
  }
 

  size(node){
    // calculate the number of nodes in the tree, starting from the given node
    if (node===null) {
      return 0;
    }
    // for each node increment size and call function recursively for left
    // and right child.
    return this.size(node.left) + 1 + this.size(node.right)
  }

  getMax(){
      // return the maximum value stored in the tree
    if(!this.root) return null;
    let current = this.root;
    while(current.right){
       current = current.right
    }
    return current
  }

  height(node){
    // calculate the maximum amount of nodes in any one path from the given node
    if(!node) return 0;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    // get the height of each side of of the node
    return Math.max(leftHeight, rightHeight) + 1;
    // return the maximum between the left and right side, adding one for each node in the path
  }

  isBalanced(node){
    // return true or false based on whether the sub-tree starting at the given node is balanced
    // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
    // A tree is balanced if all branches end within one level of each other.
    // Base condition 
    if (node === null) return true;
    // for left and right subtree height 
    const leftHeight = this.height(node.left) 
    const rightHeight = this.height(node.right) 
    // allowed values for (leftHeight - rightHeight) are 1, -1, 0 
    if (Math.abs(leftHeight - rightHeight) <= 1 &&
       this.isBalanced(node.left) && 
       this.isBalanced(node.right)) {
         return true
    }
    // if we reach here means tree is not  
    // height-balanced tree 
    return false
  }
}

module.exports = BinaryTree

const myTree = new BinaryTree()

myTree.insert(5)
myTree.insert(4)
myTree.insert(2)
myTree.insert(3)
myTree.insert(6)
myTree.insert(9)
myTree.insert(8)
myTree.insert(23)
myTree.insert(21)
myTree.insert(32)
myTree.insert(34)
myTree.insert(13)
myTree.insert(7)
myTree.insert(1)



const nodeInTree = myTree.search(5)
console.log("found node: ", nodeInTree)

console.log(myTree.height(nodeInTree))
console.log(myTree.size(nodeInTree))
console.log(myTree.getMax())
console.log(myTree.isBalanced(nodeInTree))