// Given a string s of '(' , ')' and lowercase English characters.
// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
// Formally, a parentheses string is valid if and only if:
// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

// Example 1:
// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

// Example 2:
// Input: s = "a)b(c)d"
// Output: "ab(c)d"

// Example 3:
// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.

// O(n) time and space complexity solution
var minRemoveToMakeValid = function (s) {
  //   So that we can get the index of invalid parentheses and later on exclude the parentheses in our final result.
  const strArr = s.split('');

  //   To keep track of invalid parenthesis
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === '(') {
      stack.push(i);
    } else if (element === ')') {
      //       If our stack is empty
      if (stack.length === 0) {
        // An indicator to let us know that (ith) position is invalid.
        strArr[i] = '.';
      } else {
        //         If there is an open parentheses previously
        stack.pop();
      }
    }
  }

  // Mark all the invalid parentheses
  while (stack.length !== 0) {
    strArr[stack.pop()] = '.';
  }

  //   Built the result string excluding the invalid parentheses
  const result = strArr.reduce((prev, char) => {
    return char !== '.' ? prev + char : prev;
  }, '');
  return result;
};

const str = '))((';
console.log(minRemoveToMakeValid(str));
