class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev:null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new DoublyNode(value)
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  prepend(value) {
    const newNode = new DoublyNode(value)
    
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value)
      return
    }
    if (index >= this.length) {
      this.append(value)
      return
    }

    let newNode = new DoublyNode(value);
    let i = 1;
    let tempNode = this.head;
    let prevNode = null;
    while (i <= index) {
      prevNode = tempNode;
      if (i === index) {
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        newNode.next.prev = newNode;
      }
      tempNode = tempNode.next;
      i++
    }
    this.length++;
  }

  remove(index) {

    // Only 1 item
    if(this.length === 1) {
      // this.head === this.tail (Only one node in list)
      this.head = null;
      this.tail = null;
      this.length--;
      return
    }

    // If user provide wrong index that is more than the length of linked list
    index = index > this.length ? this.length : index;

    // If remove from start
    if(index === 0) {
      this.head = this.head.next;
      this.head.prev = null
      this.length--;
      return;
    }
    let prevNode = this.getPrevNode(index-1);

    if(index >= this.length) {
      prevNode.next = null;
      this.tail = prevNode;
    }  else {
      prevNode.next = prevNode.next.next;
      prevNode.next = prevNode;
    }

    this.length--;
  }

  getPrevNode(index) {
    let count = 0;
    let prevNode = this.head;
    while(count < index-1) {
      prevNode = prevNode.next
      count++;
    }
    return prevNode;
    
    
  }
  printLinkedList() {
    let temp = this.head;
    const arr = []
    while (temp != null) {
      arr.push(temp.value)
      temp = temp.next;
    }
    return arr;
  }

  printReversedLinkedList() {
    let temp = this.tail;
    const arr = []
    while (temp != null) {
      arr.push(temp.value)
      temp = temp.prev;
    }
    return arr;
  }

}

const linkedList = new DoublyLinkedList(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)


// linkedList.remove(0)
// linkedList.remove(1)
// linkedList.remove(2)

console.log(linkedList.printLinkedList())
console.log(linkedList.printReversedLinkedList())

// console.log(linkedList)