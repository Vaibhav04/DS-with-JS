// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

// O(logn) time and O(1) space
var searchRange = function (nums, target) {
  const res = [];
  let firstOccurence = -1,
    lastOccurence = -1;

  let left = 0,
    right = nums.length;
  // Get firstOccurence
  while (left <= right && left < nums.length) {
    // console.log(left, right);

    const mid = Math.floor((left + right) / 2);
    const val = nums[mid];

    if (target === val) firstOccurence = mid;
    if (target <= val) {
      right = mid - 1;
    } else if (target > val) {
      left = mid + 1;
    }
  }
  if (firstOccurence === -1) {
    return [-1, -1];
  }

  res.push(firstOccurence);

  // Get last occurence
  (left = 0), (right = nums.length - 1);
  while (left <= right) {
    // console.log(left, right);
    const mid = Math.floor((left + right) / 2);
    const val = nums[mid];

    if (target === val) lastOccurence = mid;
    if (target < val) {
      right = mid - 1;
    } else if (target >= val) {
      left = mid + 1;
    }
  }
  res.push(lastOccurence);
  return res;
};

const nums = [5, 5, 7, 7, 8, 8, 10],
  target = 5;
console.log(searchRange(nums, target));
