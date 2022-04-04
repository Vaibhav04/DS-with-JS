// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

const { LinkedList } = require('../LinkedList');
const ll1 = new LinkedList();
ll1.convertArrayToLinkedList([1, 2, 3, 4, 5]);

var swapNodes = function (head, k) {
  // Get list length
  let temp = head,
    i = 1;
  while (i < k) {
    temp = temp.next;
    i++;
  }
  let tempFront = temp;
  //   console.log(temp);
  let tempEnd = head;
  while (temp.next !== null) {
    temp = temp.next;
    tempEnd = tempEnd.next;
  }
  //   console.log(tempFront.val, tempEnd.val);
  let tempVal = tempEnd.val;
  tempEnd.val = tempFront.val;
  tempFront.val = tempVal;

  //   [[tempFront.val], [tempEnd.val]] = [[tempEnd.val], [tempFront.val]];
  return head;

  //   console.log('hey');
};

swapNodes(ll1.head, 5);
console.log(ll1.printLinkedList());
