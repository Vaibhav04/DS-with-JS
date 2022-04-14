const { BinaryTreeNode } = require('./BinaryTreeNode');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new BinaryTreeNode(value);

    // If tree empty
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let temp = this.root;
    let prev = null;

    // To get the correct position where the new node will be inserted
    while (temp != null) {
      prev = temp;
      if (value <= temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }

    if (value <= prev.value) {
      prev.left = newNode;
    } else {
      prev.right = newNode;
    }
  }

  lookup(value) {
    if (this.root === null) {
      return null;
    }
    let temp = this.root;
    while (temp != null) {
      if (value === temp.value) {
        return value;
      } else if (value < temp.value) {
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
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } else {
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  bfs(node = this.root) {
    const queue = [];
    const res = [];
    let tempNode = node;
    queue.push(tempNode);

    while (queue.length) {
      tempNode = queue.shift();
      res.push(tempNode.value);
      if (tempNode.left) {
        queue.push(tempNode.left);
      }
      if (tempNode.right) {
        queue.push(tempNode.right);
      }
    }
    return res;
  }

  bfsRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }

    let tempNode = queue.shift();
    list.push(tempNode.value);
    if (tempNode.left) {
      queue.push(tempNode.left);
    }
    if (tempNode.right) {
      queue.push(tempNode.right);
    }

    return this.bfsRecursive(queue, list);
  }

  dfsInorder(node, list) {
    if (node === null) {
      return;
    }
    if (node.left) {
      this.dfsInorder(node.left, list);
    }
    // console.log(list);
    list.push(node.value);
    if (node.right) {
      this.dfsInorder(node.right, list);
    }
    return list;
  }

  dfsPreorder(node, list) {
    if (node === null) {
      return;
    }
    // console.log(list);
    list.push(node.value);
    if (node.left) {
      this.dfsPreorder(node.left, list);
    }
    if (node.right) {
      this.dfsPreorder(node.right, list);
    }
    return list;
  }

  dfsPostorder(node, list) {
    if (node === null) {
      return;
    }
    if (node.left) {
      this.dfsPostorder(node.left, list);
    }
    if (node.right) {
      this.dfsPostorder(node.right, list);
    }
    // console.log(list);
    list.push(node.value);
    return list;
  }

  validate(node) {
    const inOrderTree = this.dfsInorder(node);

    let i = 0;
    while (i < inOrderTree.length - 1) {
      if (!(inOrderTree[i] < inOrderTree[i + 1])) {
        return false;
      }
      i++;
    }
    return true;
  }

  constructBST(values) {
    for (const val of values) {
      this.insert(val);
    }
  }
}

// const bst = new BinarySearchTree();
// bst.insert(9);
// bst.insert(4);
// bst.insert(6);
// bst.insert(20);
// bst.insert(170);
// bst.insert(15);
// bst.insert(1);

// console.log(bst.lookup(21))

// console.log(JSON.stringify(bst));

// console.log(bst.bfs())
// console.log(bst.bfsRecursive([bst.root], []))

// console.log(bst.dfsInorder(bst.root, []))
// console.log(bst.dfsPreorder(bst.root, []));
// console.log(bst.dfsPostorder(bst.root, []));

module.exports = {
  BinarySearchTree,
};
