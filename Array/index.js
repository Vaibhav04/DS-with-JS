class MyArray {
  constructor() {
    this.length = 0;
    this.data = []
  }

  push(item) {
    this.data[this.length] = item
    return ++this.length;
  }

  pop() {
    delete this.data[this.length - 1]
    this.length--;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    this.shiftItems(index)
    delete this.data[this.length-1]
    this.length--;
  }

  shiftItems(index) {
    for(let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1]
    }
  }
}

const newArr= new MyArray()
console.log(newArr.push(1))
newArr.push(2)
newArr.push(3)

// newArr.pop()
newArr.delete(0)

console.log(newArr)