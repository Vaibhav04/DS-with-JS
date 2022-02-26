class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    // If stack is not empty
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.length++;

    console.log(this.peek())
  }

  pop() {
    // Stack empty
    if(!this.top) {
      return null;
    }
    
    this.top = this.top.next;
    this.length--
  }

  peek() {
    return this.top.value;
  }
}

const stack = new Stack()

stack.push(1)


  stack.push(2)
  stack.push(3)
  stack.push(4)
  
stack.pop()
stack.pop()
stack.pop()
stack.pop()



console.log(stack)

