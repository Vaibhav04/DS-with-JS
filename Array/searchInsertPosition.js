// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let middleInd;

  if (target <= nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  if (target === nums[nums.length - 1]) {
    return nums.length - 1;
  }
  while (left <= right) {
    middleInd = Math.floor((left + right) / 2);
    if (target < nums[middleInd]) {
      right = middleInd - 1;
    } else if (target > nums[middleInd]) {
      left = middleInd + 1;
    } else {
      return middleInd;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 6));
