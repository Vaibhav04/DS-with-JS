// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
// Example 1:
// Input: num1 = "2", num2 = "3"
// Output: "6"

// Example 2:
// Input: num1 = "123", num2 = "456"
// Output: "56088"

/** Explanation
 * 1. Start from end, just like you do multiplication by hand.
 * 2. Create a new array, whose maximum length will be sum of length of given two numbers.
 * 3. Keep multiplying and update the array
 *  - The next index will store the total sum(carry + product) %10.
 *  - The current index will store the carry.
 * */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const res = new Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      // Sum = previous value + product of current two numbers
      const sum = res[i + j + 1] + Number(num1[i]) * Number(num2[j]);
      // Store the carry in current index.
      res[i + j] += Math.floor(sum / 10);
      // Store sum % 10 in next index
      res[i + j + 1] = sum % 10;
    }
  }
  console.log(res);
  if (res[0] === 0) res.shift();
  return res.join('');
};
const num1 = '123';
const num2 = '456';
console.log(multiply(num1, num2));
// console.log(123 * 456);
