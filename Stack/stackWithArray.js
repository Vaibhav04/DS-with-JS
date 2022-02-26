class Stack {
  constructor() {
   this.data = []
  }

  push(val) {
    this.data.push(val);
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const stack = new Stack()

stack.push(1)


  stack.push(2)
  stack.push(3)
  stack.push(4)
  
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()


console.log(stack)

