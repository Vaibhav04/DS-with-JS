// Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.
// Implement the FreqStack class:
// FreqStack() constructs an empty frequency stack.
// void push(int val) pushes an integer val onto the top of the stack.
// int pop() removes and returns the most frequent element in the stack.
// If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
/** Question Link(https://leetcode.com/problems/maximum-frequency-stack) */

var FreqStack = function () {
  // To hold the frequency of each value
  this.freqMap = {};
  // To maintain the list of items with same frequency
  // {
  //  1:[1, 2, 3], // 1, 2, 3 appears one time
  //  2: [1]       // 1 appears 2 time
  // }
  this.listMap = {};
  //   To hold the maximum frequency
  this.maxFreq = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
// O(1) operation
FreqStack.prototype.push = function (val) {
  // Simply maintaining the frequency with respect to item value
  if (!this.freqMap[val]) {
    this.freqMap[val] = 1;
  } else {
    this.freqMap[val] = this.freqMap[val] + 1;
  }

  const freq = this.freqMap[val];
  //   Updating the max frequency
  this.maxFreq = Math.max(this.maxFreq, freq);

  //   Creating the list map to hold a list of values
  //   If list for current frequency does not exist in our listMap, then create a list for it.
  if (!this.listMap[freq]) {
    this.listMap[freq] = [val];
  } else {
    //   Otherwise push the current value in the existing list
    this.listMap[freq].push(val);
  }
};

/**
 * @return {number}
 */
// O(1) operation
FreqStack.prototype.pop = function () {
  //   Get list of value to be popped
  //   Here maxFreq is used becuase value with max frequency is to be removed
  //   In case of same frequency the topmost item of this list will be near to stack top
  const tempList = this.listMap[this.maxFreq];
  const top = tempList[tempList.length - 1];

  //   Removing the item from list
  tempList.pop();
  //   Updating the list
  this.listMap[this.maxFreq] = tempList;

  // If popped item exist in freqMap, then decrease its frequency by 1
  if (this.freqMap[top]) {
    this.freqMap[top] = this.freqMap[top] - 1;
  }

  // If complete list has gone blank, reduce the max frequency by 1
  if (this.listMap[this.maxFreq].length === 0) {
    this.maxFreq--;
  }
  return top;
};
var obj = new FreqStack();
obj.push(5); // The stack is [5]
obj.push(7); // The stack is [5,7]
obj.push(5); // The stack is [5,7,5]
obj.push(7); // The stack is [5,7,5,7]
obj.push(4); // The stack is [5,7,5,7,4]
obj.push(5); // The stack is [5,7,5,7,4,5]

obj.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
obj.pop(); // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
obj.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
obj.pop(); // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
console.log(obj);
