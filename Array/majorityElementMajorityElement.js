// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/** This solution works only when the is one majority item in the array.
 * Keep traversing the array.
 * 1. Assign the first item as "res".
 * 2. If current item is same as "res" increase count, else decrease.
 * 3. If at any stage, count becomes = 0 . Assign the value at current index as res.
 * 4. In the end we will be left with majority element.
 */

// O(n) time O(1) space complexity
var majorityElement = function (nums) {
  let count = 0,
    res = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (count === 0) {
      res = element;
    }
    if (res === element) {
      count++;
    } else {
      count--;
    }
  }
  return res;
};

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
