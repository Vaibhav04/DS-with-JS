// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Follow up: Do not use any built-in library function such as sqrt.
// Example 1:
// Input: num = 16
// Output: true

// Example 2:
// Input: num = 14
// Output: false

/** Explanation
 * For checking perfect square till num, we do
 * 1^2 === num, 2^2 === num, 3^2 === num, 4^2 === num, till we find a perfect square or our value gets more than perfect square.
 * We can reduce these steps by eleminating some values using binary search
 * If our squared value > than num then, we need to check in left side else, right side.
 */

// O(log n) time and O(1) space
var isPerfectSquare = function (num) {
  let left = 1,
    right = num;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const guess = mid * mid;
    if (guess === num) return true;
    if (guess > num) right = mid - 1;
    if (guess < num) left = mid + 1;
  }
  return false;
};
let num = 16;
console.log(isPerfectSquare(num));
