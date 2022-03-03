// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
  let maxTillIndex = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for(let num of nums) {
    maxTillIndex = maxTillIndex + num;

    if(maxTillIndex < num) {
      maxTillIndex = num;
    }

    if(max < maxTillIndex) {
      max = maxTillIndex
    }
  }
  return max;
};

const nums = []
console.log(maxSubArray(nums));