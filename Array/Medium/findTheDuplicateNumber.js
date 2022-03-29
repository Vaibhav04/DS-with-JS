// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

// * This will work only if number is repeating one time.
// !Won't work if number repeats more than once.
// var findDuplicate = function (nums) {
//   const actualLen = nums.length - 1;
//   const expectedSum = (actualLen / 2) * (2 + actualLen - 1);
//   const total = nums.reduce((prev, val) => {
//     return val + prev;
//   }, 0);
//   // console.log(total);
//   // console.log(expectedSum);
//   return total - expectedSum;
// };


// O(n) time and O(1) space  (Resource :- https://www.youtube.com/watch?v=wjYnzkAhcNk)
// Same as detecting cycle in linked list using Floyd's Cycle Detection.
var findDuplicate = function (nums) {
  let slow = 0,
    fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) break;
  }
  let newSlow = 0;
  while (slow !== newSlow) {
    slow = nums[slow];
    newSlow = nums[newSlow];
  }
  return newSlow;
};
const nums = [3, 1, 3, 4, 2, 3];
console.log(findDuplicate(nums));
