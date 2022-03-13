// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

var isValid = function (s) {
  const data = [];

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === '[' || element === '{' || element === '(') {
      data.push(element);
    }

    if (element === ']' || element === '}' || element === ')') {
      if (
        (element === ']' && data[data.length - 1] === '[') ||
        (element === '}' && data[data.length - 1] === '{') ||
        (element === ')' && data[data.length - 1] === '(')
      ) {
        data.pop();
      } else {
        return false;
      }
    }
  }
  if (data.length === 0) return true;
  return false;
};

const string = '()';
console.log(isValid(string));
