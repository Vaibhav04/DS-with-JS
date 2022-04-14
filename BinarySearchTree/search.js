// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// Example 1:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// Example 2:
// Input: root = [4,2,7,1,3], val = 5
// Output: []

const { BinarySearchTree } = require('./index.js');

var searchBST = function (root, val) {
  if (root === null) return [];
  let temp = root;
  while (temp !== null && temp.value !== val) {
    console.log(temp.value, temp.left, temp.right);

    if (val < temp.value) {
      temp = temp.left;
    } else {
      temp = temp.right;
    }
  }
  if (temp === null) return [];
  return bst.bfs(temp);
};
const bst = new BinarySearchTree();
bst.constructBST([4, 2, 7, 1, 3]);

console.log(searchBST(bst.root, 4));
