// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]
let count = 0;

var moveZeroes = function (nums) {
  let p1 = 0,
    p2 = 0;

  while (p1 < nums.length && p2 < nums.length) {
    //   Get non zero item
    while (nums[p2] === 0 && p2 < nums.length) {
      p2++;
    }

    // If this condition satisfies then there are no more non zeros on right hand side
    console.log(nums);
    if (p2 === nums.length) break;

    //Replace with item with value === 0
    [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
    p1++;
    p2++;
  }
};

// Alternative approach
// var moveZeroes2 = function (nums) {
//   let p1 = 0,
//     p2;

//   while (p1 < nums.length) {
//     if (nums[p1] === 0) {
//       if (!(p2 >= 0)) {
//         console.log('setting p2');
//         p2 = p1;
//       }
//       console.log('p2 is ', p2);
//       while (nums[p2] === 0 && p2 < nums.length) p2++;
//       console.log('p2 is ', p2);

//       // If we have reached at the end of array
//       if (p2 === nums.length) return;

//       [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
//     }
//     p1++;
//   }
// };
const nums = [0, 0, 1, 2, 3, 0];
moveZeroes(nums);
// console.log(nums);
