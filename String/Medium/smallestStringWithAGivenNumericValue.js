// The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet, so the numeric value of a is 1, the numeric value of b is 2, the numeric value of c is 3, and so on.
// The numeric value of a string consisting of lowercase characters is defined as the sum of its characters' numeric values. For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.
// You are given two integers n and k. Return the lexicographically smallest string with length equal to n and numeric value equal to k.
// Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

// Example 1:
// Input: n = 3, k = 27
// Output: "aay"
// Explanation: The numeric value of the string is 1 + 1 + 25 = 27, and it is the smallest string with such a value and length equal to 3.

// Example 2:
// Input: n = 5, k = 73
// Output: "aaszz"

/** Solution
 * Smallest string that can be made of length "n" and sums k is ((a a a...) upto n times)
 * 1. Store the ASCII code of "a" for every index in array of length "n".
 * 2. Decrease the given numeric value by our current numeric value that formed with the given "n".
 * 3. To make our string lexicographically smallest string we need to begin from end.
 * 4. The value that can be inserted in array is between (97, 122) (97 being the base case for ascii code for "a").
 * 5. While traversing, we are adding the ascii code in array depending upon the characters that will be needed to make the final string.
 * 6. In the end the resultant array items are converted into characters and returned as string.
 */

// O(n) time and space complexity
var getSmallestString = function (n, k) {
  const str = new Array(n).fill(97);

  k -= n;
  strLen = str.length - 1;

  while (k > 0) {
    const minVal = Math.min(25, k);
    str[strLen] = minVal + 97;
    k -= minVal;
    strLen--;
  }

  return str.reduce((prev, val) => {
    return prev + String.fromCharCode(val);
  }, '');
};
const n = 5;
const k = 73;
console.log(getSmallestString(n, k));
