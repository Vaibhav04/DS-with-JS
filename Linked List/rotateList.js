// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

const { LinkedList } = require('./LikedList');

const ll = new LinkedList();
ll.convertArrayToLinkedList([0, 1, 2]);
console.log(ll);

// O(n) time and O(1) space complexity
var rotateRight = function (head, k) {
  if (head === null) return head;
  if (k < 0) return head;
  // Find the length of linked list
  let count = 0,
    temp = head;

  while (temp !== null) {
    temp = temp.next;
    count++;
  }

  // Find the actual rotation
  let actualRotation = k % count;

  // In this case the list will be same
  if (actualRotation === 0) return head;

  // Make two pointer
  let p1 = head,
    p2 = head;

  // Move second pointer till the given gap

  while (actualRotation > 0) {
    p2 = p2.next;
    actualRotation--;
  }

  // Move each pointer one by one
  // At the end p2 will point to end and p1 will point to the node which is going to be our new tail

  while (p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  //   Update the next of tail to the current head
  p2.next = head;
  //   Point new head to next to the next of p1
  head = p1.next;
  p1.next = null;

  return head;
};

const newList = rotateRight(null, 4);
LinkedList.printFromGivenNode(newList);
