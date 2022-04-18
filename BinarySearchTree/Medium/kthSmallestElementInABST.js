// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Input: root = [5,3,6,2,4,null,null,1], k = 3

// Example 2:
// Output: 3

const { BinarySearchTree } = require('../index');

var kthSmallest = function (root, k) {
  let temp = root,
    count = 1,
    val;
  function inOrder(temp) {
    if (!temp) return;

    inOrder(temp.left);

    console.log(count, k);
    if (count === k) {
      val = temp.value;
    }
    count++;

    inOrder(temp.right);
  }
  inOrder(temp);
  return val;
};

const bst = new BinarySearchTree();
bst.constructBST([5, 3, 6, 2, 4, 1]);
console.log(kthSmallest(bst.root, 1));
