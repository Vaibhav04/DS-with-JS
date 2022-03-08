// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// O(n) time complexity O(n) space complexity
// var trap = function (heights) {
//   let maxLeftValues = new Array(heights.length).fill(0),
//     maxRightValues = new Array(heights.length).fill(0);
//   let maxLeftValue = heights[0],
//     maxRightValue = heights[heights.length - 1];
//   for (let i = 0; i < heights.length; i++) {
//     maxLeftValue = Math.max(maxLeftValue, heights[i]);
//     maxRightValue = Math.max(maxRightValue, heights[heights.length - 1 - i]);

//     maxLeftValues[i] = maxLeftValue;
//     maxRightValues[heights.length - 1 - i] = maxRightValue;
//   }

//   let maxWater = 0;
//   for (let i = 0; i < heights.length; i++) {
//     maxWater += Math.min(maxLeftValues[i], maxRightValues[i]) - heights[i];
//   }
//   return maxWater;
// };

// Better approach
// O(n) time complexity O(1) space complexity
var trap = function (heights) {
  let left = 0,
    right = heights.length - 1;
  let maxLeftValue = heights[left],
    maxRightValue = heights[right];
  let total = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      // Either update maxLeft value or add to total
      if (heights[left] <= maxLeftValue) {
        total += maxLeftValue - heights[left];
      } else {
        maxLeftValue = heights[left];
      }
      left++;
    } else {
      // Either update maxRight value or add to total
      if (heights[right] <= maxRightValue) {
        total += maxRightValue - heights[right];
      } else {
        maxRightValue = heights[right];
      }
      right--;
    }
  }
  console.log(total);
  return total;
};

const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
trap(heights);
