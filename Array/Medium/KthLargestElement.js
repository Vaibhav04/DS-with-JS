// Easiest way with O(n log n) time complexity
// var findKthLargest = function (nums, k) {
//   nums.sort((a, b) => a - b);

//   return nums[nums.length - k];
// };

// With Quickselect
// * O(n)   time complexity in average case
// * O(n^2) time complexity in worst case
var findKthLargest = function (nums, k) {
  // In case of sorted array in ascending order
  k = nums.length - k;
  console.log(k);
  return quickSelect(nums, 0, nums.length - 1, k);
};
var quickSelect = function (nums, left, right, k) {
  let pivot = nums[right],
    p = left;
  for (let i = left; i < right; i++) {
    const element = nums[i];
    if (element <= pivot) {
      [nums[i], nums[p]] = [nums[p], nums[i]];
      p++;
    }
  }

  [nums[p], nums[right]] = [nums[right], nums[p]];
  //   console.log('K is ', k, 'left is ', left, 'right is ', right);
  if (k < p) {
    return quickSelect(nums, left, p - 1, k);
  } else if (k > p) {
    return quickSelect(nums, p + 1, right, k);
  } else {
    return nums[p];
  }
};

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 1;
console.log(findKthLargest(nums, k));
