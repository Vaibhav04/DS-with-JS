// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.
// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:
// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:
// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

/** Solution
 * 1. Create two pointers.
 * 2. Move second pointer twice as fast as compared to first pointer.
 * 3. There may be some point where both pointers meet (If cycle exist in list).
 * 4. From that position move one of the two pointer one by one. Assign the next pointer to head and move that pointer from head one by one as well.
 * 5. The point where they meet now is where the cycle starts.
 */

// O(n) time and O(1) space complexity
var detectCycle = function (head) {
  let p1 = head,
    p2 = head;
  // Empty list or only one node and has cycle
  if (p1 === null || p1 === p1.next) return p1;

  while (true) {
    p1 = p1.next;
    p2 = p2.next ? p2.next.next : p2.next;
    if (p2 === null) return null;

    if (p1 === p2) break;
  }

  p1 = head;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};
