// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

// Example 1:
// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4),
// pop() -> 4,
// push(5),
// pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

// Example 2:
// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.

var validateStackSequences = function (pushed, popped) {
  if (pushed.length !== popped.length) return false;
  const stack = [];

  let poppedIndex = 0;
  for (const val of pushed) {
    stack.push(val);

    while (
      poppedIndex < popped.length &&
      stack.length !== 0 &&
      stack[stack.length - 1] === popped[poppedIndex]
    ) {
      stack.pop();
      poppedIndex++;
    }
  }

  return poppedIndex === popped.length;
};

const pushed = [2, 1, 0];
const popped = [1, 2, 0];

console.log(validateStackSequences(pushed, popped));
