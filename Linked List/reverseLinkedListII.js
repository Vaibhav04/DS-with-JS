// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

const { LinkedList } = require('./LikedList');

const ll = new LinkedList();
ll.convertArrayToLinkedList([1, 2, 3, 4, 5]);
// console.log(ll);

/** Solution
 * 1. Get the node at ith position, also keep track of its prev position.( Decrement both left and right).
 * 2. Store "prev" node in new variable ("prevHeadNode"), it will be needed to store the head of reversed list in its next reference. Also, keep track of current node in another variable ("tail") too because it will be our new tail and will also be needed in the end to update its next to the next of last node of the list to be reversed.
 * 3. Traverse and keep reversing till the right position while also maintaining prev, current and nextNode.
 * 4. In the end, we need to update the "prevNodehead.next" to "prev" if we did't reverse the list from the start, else we need to update the head to "prev".
 * 5. Also update the "tail.next" to "current" as discussed in step 2.
 */
// O(n) time O(1) space complexity
var reverseBetween = function (head, left, right) {
  if (head === null) return head;

  let prev = null;
  let current = head;

  while (left > 1) {
    prev = current;
    current = current.next;
    left--;
    right--;
  }

  let prevHeadNode = prev;
  let tail = current;

  while (right > 0) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
    right--;
  }

  if (prevHeadNode !== null) {
    prevHeadNode.next = prev;
  } else {
    head = prev;
  }
  tail.next = current;
  return head;
};

const newNode = reverseBetween(ll.head, 2, 4);
// console.log(newNode);
LinkedList.printFromGivenNode(newNode);
