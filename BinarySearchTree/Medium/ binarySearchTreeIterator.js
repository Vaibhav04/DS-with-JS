// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):
// BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
// boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
// int next() Moves the pointer to the right, then returns the number at the pointer.
// Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.
// You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

// Example 1:
// Input
// ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
// Output
// [null, 3, 7, true, 9, true, 15, true, 20, false]

// Explanation
// BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
// bSTIterator.next();    // return 3
// bSTIterator.next();    // return 7
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 9
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 15
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 20
// bSTIterator.hasNext(); // return False

/** Explanation
 * In inorder traversal we get min element first. To apply the same logic, we can make our own stack and push all the left nodes in this stack. By doing so, the top element of the stack will be next min value in bst.
 * We will simply pop the top node from the stack and return its value whenever we encounter "next()" operation. Parallelly, we will also keep checking, if top node from the stack that we recently popped has any right child. Because, if it does then the next value will come from this right sub tree.
 *  - If it has right child, we will apply the same logic and put all the left childs of this node in our stack. By doing so, the top of the stack will be having next element.
 */

var BSTIterator = function (root) {
  this.stack = [];
  this.temp = root;
  this.pushAllValues();
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const topNode = this.stack.pop();
  this.temp = topNode.right;

  this.pushAllValues();

  return topNode.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length;
};

BSTIterator.prototype.pushAllValues = function () {
  while (this.temp) {
    this.stack.push(this.temp);
    this.temp = this.temp.left;
  }
};
