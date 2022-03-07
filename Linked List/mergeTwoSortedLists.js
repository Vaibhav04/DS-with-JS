var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  let newHead;
  let temp;
  let count = 0;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      const newNode = new Node(l1.val);
      if (!newHead) {
        newHead = newNode;
        temp = newHead;
      } else {
        temp.next = newNode;
        temp = temp.next;
      }
      l1 = l1.next;
    } else if (l1.val > l2.val) {
      const newNode = new Node(l2.val);
      if (!newHead) {
        newHead = newNode;
        temp = newHead;
      } else {
        temp.next = newNode;
        temp = temp.next;
      }
      l2 = l2.next;
    }
  }

  while (l1 !== null) {
    temp.next = l1;
    temp = temp.next;
    l1 = l1.next;
  }
  while (l2 !== null) {
    temp.next = l2;
    temp = temp.next;
    l2 = l2.next;
  }
  return newHead;
};
