// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const val = nums[mid];
    if (val === target) return mid;
    if (target < val) right = mid - 1;
    else if (target > val) left = mid + 1;
  }
  return target < nums[mid] ? mid : mid + 1;
};

const nums = [2, 3, 5, 6];
const target = 1;
console.log(searchInsert(nums, target));
