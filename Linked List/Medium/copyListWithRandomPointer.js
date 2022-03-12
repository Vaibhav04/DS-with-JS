// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

const { LinkedList } = require('../LikedList');

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

const ll = new LinkedList();
ll.convertArrayToLinkedList([1, 2, 3, 4, 5]);
// console.log(ll.printLinkedList());

// O(n) time and O(1) space complexity
var copyRandomList = function (head) {
  let p1 = head;
  let newHead = null;
  while (p1 !== null) {
    const newNode = new Node(p1.val);

    // Make a copy node and place between the nodes
    newNode.next = p1.next;
    p1.next = newNode;

    if (newHead === null) {
      newHead = newNode;
    }
    // Move pointer by two to get next value
    p1 = p1.next.next;
  }

  p1 = head;
  // Setting random
  while (p1 !== null) {
    // If it is null in first list, then set it to null in second list too
    if (p1.random === null) {
      // We can get copy of current node because it is placed right next to current node by above logic
      p1.next.random = null;
    } else {
      //Otherwise set the random of copy of current node to random of current node
      p1.next.random = p1.random.next;
    }
    // Move by two to get the next value
    p1 = p1.next.next;
  }

  p1 = head;
  let nextNode = null;
  let p2 = newHead;

  // Reset the next pointers of first list so that every node of the given list point to the originial node of this list
  // We have to do it because we have altered the next pointer of given list.
  while (p1 !== null) {
    nextNode = p1.next.next;
    p1.next = nextNode;

    // Also, update the next pointers of final list so that it points to the copied nodes.
    p2.next = nextNode ? nextNode.next : null;

    p1 = p1.next;
    p2 = p2.next;
  }
  return newHead;
};

// Won't be able to test because there is 1 more extra field in node.
const resNode = copyRandomList(ll.head);
// console.log(resNode);
// LinkedList.printFromGivenNode(resNode);
