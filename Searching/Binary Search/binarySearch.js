// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else if (target === nums[middle]) {
      return middle;
    }
  }
  return -1;
};

console.log(search([5], 5));
