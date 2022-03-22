// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// O(n) time complexity O(1) space complexity
var hasCycle = function (head) {
  let p1 = head,
    p2 = head.next;
  // Only one node
  if (p1 === p2) return true;

  while (p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next ? p2.next.next : p2.next;

    if (p1 === p2) return true;
  }

  return false;
};
