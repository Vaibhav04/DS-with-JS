// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []

/** Solution
 * 1. Can be done in O(n^3) by using nested loop. But not good.
 * 2. With time O(n^2) and space O(n) with two nested loop and 1 hashmap.
 *    - Get sum of 2 and find third item in hashmap
 * 3. With O(n^2) time complexity.
 */

// O(n^2) time complexity and O(log n) space complexity.
// TODO write the explanaition for this.
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        //   Keep moving forward if values are same because we don't need same pair again.
        while (nums[left] === nums[left - 1] && left < right) left++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  console.log(res);
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
