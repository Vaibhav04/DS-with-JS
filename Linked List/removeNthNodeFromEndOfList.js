// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

const { LinkedList } = require('./LikedList');

const ll = new LinkedList();
ll.convertArrayToLinkedList([1, 2, 3, 4, 5]);
console.log(ll);

var removeNthFromEnd = function (head, n) {
  let p1 = head,
    p2 = head;

  while (n > 0) {
    p2 = p2.next;
    n--;
  }
  // If p2 has reached the end, then, head node is to be deleted
  if (p2 === null) {
    head = head.next;
    return head;
  }

  while (p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p1.next = p1.next.next;
  return head;
};

/**
 * @param {Node} head
 * @param {number} n
 */
const newHead = removeNthFromEnd(ll.head, 5);
LinkedList.printFromGivenNode(newHead);
