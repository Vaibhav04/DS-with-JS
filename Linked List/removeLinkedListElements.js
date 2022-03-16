// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []
const { LinkedList } = require('./LikedList');

const ll = new LinkedList();
ll.convertArrayToLinkedList([1, 1, 1, 1, 1]);

// O(n) time O(1) space complexity
var removeElements = function (head, val) {
  let prev = null,
    curr = head;
  let newHead = head;

  while (curr !== null) {
    if (curr.val === val) {
      if (prev === null) {
        newHead = curr.next;
      } else {
        prev.next = curr.next;
      }
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return newHead;
};

const newHead = removeElements(ll.head, 1);
LinkedList.printFromGivenNode(newHead);
