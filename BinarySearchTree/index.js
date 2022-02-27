class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  insert(value) {
    let newNode = new BinaryTreeNode(value);

    // If tree empty
    if(this.root === null) {
      this.root = newNode;
      return
    }

    let temp = this.root;
    let prev = null;

    // To get the correct position where the new node will be inserted
    while(temp != null) {
      prev = temp;
      if(value <= temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }

    if(value <= prev.value) {
      prev.left = newNode
    } else {
      prev.right = newNode;
    }
    
  }

  lookup(value) {
    if(this.root === null) {
      return null
    }
    let temp = this.root;
    while(temp != null) {
      if(value === temp.value) {
        return value
      } else if(value < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }

    return null;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        } else {

          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

console.log(bst.lookup(21))

// console.log(JSON.stringify(bst))