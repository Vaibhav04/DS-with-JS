const { LinkedList } = require('./LikedList.js');

const ll = new LinkedList(1);

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const val of values) {
  ll.append(val);
}
console.log(ll.printLinkedList());

var middleNode = function (head) {
  let p1 = head,
    p2 = head.next;
  if (head === null) return {};

  if (p2 === null) return p1;
  let count = 0;

  while (p2 !== null) {
    p2 = p2.next ? p2.next.next : p2.next;
    p1 = p1.next;
    count++;
  }
  console.log(count);
  return p1;
};

let node = middleNode(ll.head);
// LinkedList.printFromGivenNode(node);
