// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Example 3:
// Input: l1 = [2,4,9]], l2 = [5,6,4,9]
// Output: [7,0,4,0,1]

const { LinkedList } = require('./LikedList.js');
const { Node } = require('./SinglyNode');

const ll1 = new LinkedList(9);

const ll1Values = [9, 1];
for (const val of ll1Values) {
  ll1.append(val);
}

const ll2 = new LinkedList(1);
// const ll2Values = [6, 4, 9];
// for (const val of ll2Values) {
//   ll2.append(val);
// }
console.log(ll1.printLinkedList());
console.log(ll2.printLinkedList());

var addTwoNumbers = function (l1, l2) {
  if (l1 === null || l2 === null) return l1 || l2;
  let p1 = l1,
    p2 = l2;
  let newHead = null,
    temp = null;
  let carry = 0;
  //   console.log(l1, l2);

  while (p1 !== null && p2 !== null) {
    let sum = p1.val + p2.val + carry;
    let valueToInsert = sum % 10;
    let newNode = new Node(valueToInsert);
    if (!newHead) {
      newHead = newNode;
      temp = newHead;
    } else {
      temp.next = newNode;
      temp = temp.next;
    }
    carry = Math.floor(sum / 10);
    p1 = p1.next;
    p2 = p2.next;
  }

  console.log(p1, p2);

  //   If still there are nodes in ll1 or ll2
  if (p1 !== null) {
    while (p1 !== null) {
      let sum = p1.val + carry;
      let valueToInsert = sum % 10;

      let newNode = new Node(valueToInsert);
      temp.next = newNode;
      temp = temp.next;

      p1 = p1.next;
      carry = Math.floor(sum / 10);
    }
  } else if (p2 !== null) {
    console.log('eh');
    while (p2 !== null) {
      let sum = p2.val + carry;
      let valueToInsert = sum % 10;
      let newNode = new Node(valueToInsert);
      temp.next = newNode;
      temp = temp.next;
      p2 = p2.next;

      console.log(temp);
      carry = Math.floor(sum / 10);
    }
  }

  //   If carry >0
  if (carry > 0) {
    let newNode = new Node(carry);
    temp.next = newNode;
  }
  return newHead;
};

const newList = addTwoNumbers(ll1.head, ll2.head);
// console.log(newList);
LinkedList.printFromGivenNode(newList);
