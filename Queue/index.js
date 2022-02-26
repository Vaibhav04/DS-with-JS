class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    // If queue is empty
    if(this.first === null && this.last === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
    // If queue is not empty
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  dequeue() {
    // Queue empty
    if(!this.first) {
      return null;
    }
    
    this.first = this.first.next;
    if(this.first === null) {
      // If queue becomes empty
      this.last = null;
    }
    this.length--
  }

  peek() {
    return this.first.value;
  }
}

const queue = new Queue()

queue.enqueue(1)


  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)
  
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()



console.log(queue)

