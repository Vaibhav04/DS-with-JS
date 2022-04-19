// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Example 1:
// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

// Example 2:
// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.

/**
 * Explanation
 * With inorder traversal of bst we are supposed to get values in increasing sorted order.
 * Hence, If at any case we get current node such that "currentNode.val" < "previousNode.val" (Then we are sure that this should be the node to be replaced)
 * While doing in order traversal we can keep a reference to previous node.
 * There can be two cases for finding the wrongly placed nodes
 *      1. If the nodes are not adjacent to each other then, we will be able to find the first and second wrongly placed nodes. And, swap their values in the end.
 *      2. But if nodes are adjacent to each other, we can store the reference to adjacent node . And, swap their values in end.
 */

var recoverTree = function (root) {
  let firstWrongNode = null,
    secondWrongNode = null,
    adjacentNode = null,
    prevNode = new TreeNode(Number.MIN_SAFE_INTEGER);

  function inOrder(temp) {
    if (!temp) return;

    inOrder(temp.left);

    // If current node value is less than previous node value( then it is placed wrong in bst)
    if (prevNode !== null && temp.val < prevNode.val) {
      // If we found the first node where it is not in it's correct position
      if (firstWrongNode === null) {
        firstWrongNode = prevNode;
        // Store current node in case nodes to be replaced are adjacent to each other.
        adjacentNode = temp;
      } else {
        // If we found the second node where it is not in it's correct position
        secondWrongNode = temp;
      }
    }
    //   Keeping track of previous node in inorder traversal
    prevNode = temp;
    inOrder(temp.right);
  }
  inOrder(root);
  if (firstWrongNode && secondWrongNode) {
    [firstWrongNode.val, secondWrongNode.val] = [
      secondWrongNode.val,
      firstWrongNode.val,
    ];
  } else if (firstWrongNode && adjacentNode) {
    [firstWrongNode.val, adjacentNode.val] = [
      adjacentNode.val,
      firstWrongNode.val,
    ];
  }
};
