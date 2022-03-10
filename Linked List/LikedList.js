const { Node } = require('./SinglyNode');
class LinkedList {
  constructor(val) {
    // If value is given then, create the head.
    // Else set it to null
    this.head = val
      ? {
          val: val,
          next: null,
        }
      : null;
    this.tail = this.head;
    this.length = 1;
  }

  append(val) {
    // console.log(val);
    const newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    // console.log(newNode);
  }

  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    // If linked list is empty
    if (this.head === null) {
      this.tail = newNode;
    }
    this.head = newNode;
    this.length++;
  }

  insert(index, val) {
    if (index === 0) {
      this.prepend(val);
      return;
    }
    if (index >= this.length) {
      this.append(val);
      return;
    }

    let newNode = new Node(val);
    let i = 1;
    let tempNode = this.head;
    let prevNode = null;
    while (i <= index) {
      prevNode = tempNode;
      if (i === index) {
        newNode.next = prevNode.next;
        prevNode.next = newNode;
      }
      tempNode = tempNode.next;
      i++;
    }
    this.length++;
  }

  remove(index) {
    // Only 1 item
    if (this.length === 1) {
      // this.head === this.tail (Only one node in list)
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }

    // If user provide wrong index that is more than the length of linked list
    index = index > this.length ? this.length : index;

    // If remove from start
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let prevNode = this.getPrevNode(index - 1);

    if (index >= this.length) {
      prevNode.next = null;
      this.tail = prevNode;
    } else {
      prevNode.next = prevNode.next.next;
    }

    this.length--;
  }

  getPrevNode(index) {
    let count = 0;
    let prevNode = this.head;
    while (count < index - 1) {
      prevNode = prevNode.next;
      count++;
    }
    return prevNode;
  }
  printLinkedList() {
    let temp = this.head;
    const arr = [];
    while (temp != null) {
      arr.push(temp.val);
      temp = temp.next;
    }
    return arr;
  }

  reverse() {
    let prevNode = null;
    let temp = this.head;
    let nextNode = this.head.next;

    while (temp != null) {
      temp.next = prevNode;
      prevNode = temp;
      temp = nextNode;

      nextNode = nextNode?.next;
    }

    this.tail = this.head;
    this.head = prevNode;
  }

  convertArrayToLinkedList(values) {
    for (let i = 0; i < values.length; i++) {
      const element = values[i];
      if (i === 0) {
        this.prepend(element);
      } else {
        this.append(element);
      }
    }
  }

  static printFromGivenNode(node) {
    if (node === null) return node;
    while (node !== null) {
      console.log(node.val);
      node = node.next;
    }
  }
}

module.exports = {
  LinkedList,
};
