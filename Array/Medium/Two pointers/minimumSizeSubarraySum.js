// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// O(n) time and O(1) space
var minSubArrayLen = function (target, nums) {
  let left = 0,
    right = 0,
    sum = 0,
    minLength = Number.MAX_SAFE_INTEGER;

  while (right < nums.length) {
    sum += nums[right];

    // If at any index our computed sum gets greater than or equal to target
    //  - Decrease the window size from left untill sum < target (Because we need to find the minimum length for which sum >= target)
    if (sum >= target) {
      while (sum >= target) {
        minLength = Math.min(minLength, right - left + 1);
        sum -= nums[left];
        left++;
      }
    }
    // If sum < target
    //  - Increase window size from right
    right++;
  }
  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};

const target = 7,
  nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
