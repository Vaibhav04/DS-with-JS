// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// ! (Do it again because it was not satisfying all the cases.)
var intersect = function (nums1, nums2) {
  const nums2Obj = {};
  //   const nums2Obj = {};

  for (let i = 0; i < nums2.length; i++) {
    const element = nums2[i];
    if (nums2Obj[element] >= 0) {
      continue;
    } else {
      nums2Obj[element] = i;
    }
  }

  console.log(nums2Obj);

  let foundIndex;
  for (let i = 0; i < nums1.length; i++) {
    const element = nums1[i];
    if (nums2Obj[element] >= 0) {
      foundIndex = i;
      break;
    }
  }
  const res = [];
  console.log(foundIndex, nums2Obj);
  if (foundIndex >= 0) {
    let num2Index = nums2Obj[nums1[foundIndex]];
    while (
      nums2[num2Index] === nums1[foundIndex] &&
      (foundIndex < nums1.length || num2Index < nums2.length)
    ) {
      res.push(nums2[num2Index]);
      num2Index++;
      foundIndex++;
    }
  }

  return res;
};

const nums1 = [];
const nums2 = [];

console.log(intersect(nums1, nums2));
