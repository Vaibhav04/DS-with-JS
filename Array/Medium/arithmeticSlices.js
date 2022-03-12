// An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

// For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: 3
// Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
// Example 2:

// Input: nums = [1]
// Output: 0

var numberOfArithmeticSlices = function(nums) {
  let sum = 0, count = 0;
    
  if(nums.length <3) return sum;
  // let APData = new Array(nums.length).fill(0);
  
  for(let i = 2; i< nums.length; i++) {
    if(nums[i]-nums[i-1] === nums[i-1]-nums[i-2] ){
      count++
      sum += count;
    } else {
        count = 0
    }
  }
  return sum
};


console.log(numberOfArithmeticSlices([1, 2, 3, 4]))