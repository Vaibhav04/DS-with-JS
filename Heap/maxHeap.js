class MaxHeap {
  constructor() {
    this._heap = [];
    this._comparator = (a, b) => {
      return a > b;
    };
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._hea[0];
  }

  push(val) {
    this._heap.push(val);
    this._shifUp();
    return this.size();
  }

  _shifUp() {
    let index = this.size() - 1;

    while (index > 0 && this._compare(index, this._getParent(index))) {
      this._swap(index, this._getParent(index));
      index = this._getParent(index);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }
    const popppedVal = this._heap.pop();
    this._shiftDown();
    return popppedVal;
  }

  _shiftDown() {
    let index = 0;
    //   Has left or right child under heap size and has values greater than its parent then, swap
    while (
      (this._getLeftChild(index) < this.size() &&
        this._compare(this._getLeftChild(index), index)) ||
      (this._getRightChild(index) < this.size() &&
        this._compare(this._getRightChild(index), index))
    ) {
      // If has right child return max of left and right. Otherwise, return left child
      const greaterChildIndex =
        this._getRightChild(index) < this.size() &&
        this._compare(this._getRightChild(index), this._getLeftChild(index))
          ? this._getRightChild(index)
          : this._getLeftChild(index);

      this._swap(greaterChildIndex, index);
      index = greaterChildIndex;
    }
  }

  _getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  _getLeftChild(index) {
    return index * 2 + 1;
  }

  _getRightChild(index) {
    return index * 2 + 2;
  }

  _swap(index1, index2) {
    [[this._heap[index1]], [this._heap[index2]]] = [
      [this._heap[index2]],
      [this._heap[index1]],
    ];
  }

  _compare(index1, index2) {
    return this._comparator(this._heap[index1], this._heap[index2]);
  }
}

const maxHeap = new MaxHeap();

const values = [1, 2, 3, 4, 5, 7, 9, 8];
for (const val of values) {
  maxHeap.push(val);
}
console.log(maxHeap._heap);

console.log('Printing with popping');
while (!maxHeap.isEmpty()) {
  console.log(maxHeap.pop());
}
