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
