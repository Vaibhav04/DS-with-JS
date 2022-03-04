// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

var merge = function(nums1, m, nums2, n) {
  let n1 = m - 1, n2 = n - 1;
  let lastPointer = nums1.length - 1;

  while (n1 >= 0 && n2 >= 0) {
    if (nums1[n1] > nums2[n2]) {
      nums1[lastPointer] = nums1[n1];
      n1--;
      lastPointer--;

    } else if (nums1[n1] === nums2[n2]) {
      nums1[lastPointer] = nums1[n1];
      n1--;
      lastPointer--;
      nums1[lastPointer] = nums2[n2];
      n2--;
      lastPointer--;

    } else {
      nums1[lastPointer] = nums2[n2];
      n2--;
      lastPointer--;

    }
  }

  while(n2 >= 0) {
    nums1[n2] = nums2[n2];
    n2--;
  }
};

const nums1 = [4,5,6,0,0,0]
const nums2 = [1, 2,3]
const m = 3, n = 3

merge(nums1, m, nums2, n)

console.log(nums1)