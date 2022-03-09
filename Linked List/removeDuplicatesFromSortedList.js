// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,3, 4, 5]

// Example 2:
// Input: head = [1,1,1,2,3]
// Output: [1, 2,3]

const { LinkedList } = require('./LikedList.js');

const ll = new LinkedList(1);

const values = [1, 2, 2, 3, 3, 4, 4, 5, 5];
for (const val of values) {
  ll.append(val);
}
console.log(ll.printLinkedList());

var deleteDuplicates = function (head) {
  if (head === null) return {};
  if (head.next === null) return head;

  let temp = head,
    next = head.next;

  while (next !== null) {
    while (next !== null && temp.val === next.val) {
      next = next.next;
    }

    // If we are at the second last node and last item is same as second last item.
    if (temp.next !== null && temp.val === temp.next.val) {
      temp.next = null;
    }

    // No duplicate is there
    if (next === null) return head;

    temp.next = next;
    temp = temp.next;
  }
};

deleteDuplicates(ll.head);
console.log(ll.printLinkedList());
