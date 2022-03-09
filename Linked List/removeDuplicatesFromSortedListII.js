// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Example 2:
// Input: head = [1,1,1,2,3]
// Output: [2,3]

const { LinkedList } = require('./LikedList.js');

const ll = new LinkedList(1);

const values = [1, 1, 2, 3];
for (const val of values) {
  ll.append(val);
}
// console.log(ll.printLinkedList());

var deleteDuplicates = function (head) {
  let temp = head,
    prev = null;
  if (head === null || head.next === null) return head;

  while (temp !== null) {
    if (temp.next !== null && temp.val === temp.next.val) {
      let currentNode = temp;
      while (currentNode !== null && currentNode.val === temp.val) {
        currentNode = currentNode.next;
      }
      temp = currentNode;

      //   It means the nodes will be remove from the start of linked list
      if (prev === null) {
        // Set new head
        head = temp;
      } else {
        prev.next = temp;
      }
    } else {
      prev = temp;
      temp = temp.next;
    }
  }
  return head;
};

const returnedNode = deleteDuplicates(ll.head);
LinkedList.printFromGivenNode(returnedNode);
