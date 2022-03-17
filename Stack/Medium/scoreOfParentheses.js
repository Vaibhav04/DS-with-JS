// Given a balanced parentheses string s, return the score of the string.
// The score of a balanced parentheses string is based on the following rule:
// "()" has score 1.
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.

// Example 1:
// Input: s = "()"
// Output: 1

// Example 2:
// Input: s = "(())"
// Output: 2

// Example 3:
// Input: s = "()()"
// Output: 2

// * Implement it again
var scoreOfParentheses = function (S) {
  let len = S.length,
    pwr = 0,
    ans = 0;
  for (let i = 1; i < len; i++)
    if (S.charAt(i) === '(') pwr++;
    else if (S.charAt(i - 1) === '(') ans += 1 << pwr--;
    else pwr--;
  return ans;
};

const str = '()()';
console.log(scoreOfParentheses(str));
