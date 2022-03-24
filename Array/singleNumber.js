// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

/** Solution
 * To do it in linear time and constant sapce. Use XOR operator.
 * The logic behind doing XOR is that when 2 same numbers are XORed they result in 0.Also, 0^num = num.
 * As only 1 item is non repeating in the nums array we will get that item in the end.
 */

var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];
  let res = nums[0];
  let i = 1;
  while (i < nums.length) {
    res ^= nums[i];
    i++;
  }
  return res;
};

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
