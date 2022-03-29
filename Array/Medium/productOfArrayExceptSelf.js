// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

/** Solution 
 * Traverse the array and keep storing the multiplication of all the elements till current index-1 in result array.
 * Now, traverse array from end and keep track of multipliction of each elements from right excluding current element and multiply it with the value stored in "result" array at current index.
*/
// O(n) time and O(1) space solution.
var productExceptSelf = function (nums) {
  const res = [];
  let i = 0;
  mulTillNow = 1;
  while (i < nums.length) {
    // console.log(
    //   `res[i] is ${res[i]}, prevItem is ${prevItem}, mulTillNow is ${mulTillNow}`
    // );
    res.push(mulTillNow);
    mulTillNow *= nums[i];
    i++;
  }

  i = nums.length - 2;
  mulTillNow = nums[nums.length - 1];
  while (i >= 0) {
    res[i] = res[i] * mulTillNow;
    mulTillNow *= nums[i];
    i--;
  }
  return res;
};

const nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums));
console.log(-0 === 0);
// [1,-1]
// Output
// [1,1]
// Expected
// [-1,1]
