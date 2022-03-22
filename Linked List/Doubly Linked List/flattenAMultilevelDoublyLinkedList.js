// You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.
// Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.
// Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

/** Solution
 * 1. Traverse first linked list, keep checking if current node has a child.
 *    - If it does not, then, we don't do anything and move to next node.
 *    - If it does, we need to merge. For this we need to keep track of some nodes.
 *          - We need the next of current node so we can set its previous pointer to the last node of child list.
 *          - We need last node of child list to point its next to the next of current node "nextNode".
 * 2. For merge, we will do it level by level, the first level will be merged first, and then second and so on...
 */

//  O(2n) => O(n) time complexity and O(1) space complexity
var flatten = function (head) {
  let currNode = head;
  while (currNode !== null) {
    if (currNode.child === null) {
      currNode = currNode.next;
    } else {
      let childNode = currNode.child;
      let nextNode = currNode.next;
      let temp = childNode;
      //   Getting last node of child list
      while (temp.next !== null) {
        temp = temp.next;
      }

      // Temp has reached at the tail of list to be merged
      // Setting "next" of last node to nextNode of current node
      temp.next = nextNode;
      // If we are not at the end of first list we need to update the prev of nextNode to last node of child list. (we don't need to update the previous of next node if we are at the end of main list)
      if (nextNode !== null) {
        nextNode.prev = temp;
      }

      //   Merging child list in main list
      currNode.next = childNode;
      childNode.prev = currNode;
      currNode.child = null;
    }
  }
  return head;
};
