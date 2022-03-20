/** Move negatives to left side */

// O(n) time complexity O(1) space.
// Changes the order of elements.
const moveNegatives = (nums) => {
  let lastPositiveIndex = 0;

  let i = 0;
  while (i < nums.length) {
    if (nums[i] < 0) {
      [nums[i], nums[lastPositiveIndex]] = [nums[lastPositiveIndex], nums[i]];
      lastPositiveIndex++;
    }
    i++;
  }
};

const nums = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
moveNegatives(nums);
console.log(nums);
