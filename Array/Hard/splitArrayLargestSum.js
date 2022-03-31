// Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.
// Write an algorithm to minimize the largest sum among these m subarrays.
// Example 1:
// Input: nums = [7,2,5,10,8], m = 2
// Output: 18
// Explanation:
// There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8],
// where the largest sum among the two subarrays is only 18.

// Example 2:
// Input: nums = [1,2,3,4,5], m = 2
// Output: 9

// Example 3:
// Input: nums = [1,4,4], m = 3
// Output: 4

/** Explanation
 * 1. For given array we first find the minimum and maximum sum from which our result can be formed. Our answer will lie between this minimum and maximum value.
 *  - The minimum sum will be the maximum of array elements.
 *  - The maximum sum will be sum of every array elements.
 * 2. Now we will apply binary search on found min and max sum.
 * 3. For current mid(sum), we will check that if we can split the array for current mid(sum) or not for given numbers of m
 *  - The array can be split if sum of continous element of array is less than or equal to current sum (mid in our case)
 *  - We will also keep track of number of partitions needed for current sum(mid), if partitions exceeds "m" then we return false because we need only "m" partitions else we return true..
 * 4. If we succeed in finding the partition. We decrease the high value because we need to find the minimum largest sum. Also, we keep track of lowest possible sum for "m" partition. We will update it if we find sum lower than our current lowest sum.
 * 5. If we fail then it means that partition could not be made for current mid(sum) and we need to update the "low" to "mid" and find out solution for sum more than our current sum.
 */

// O(n log s) time O(1) space
// n ==> length of nums
// s ==> sum (i.e high - low)
var splitArray = function (nums, m) {
  // Find min and max
  let low = Math.max(...nums);
  let high = nums.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  let maxSum = 0;
  while (low <= high) {
    //   To prevent from overloading, because low and high can be large values
    const mid = Math.floor(low + (high - low) / 2);

    // Check for lowest possible values, if split is possible
    if (isSplitPossible(nums, mid, m)) {
      maxSum = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return maxSum;
};

var isSplitPossible = function (nums, mid, m) {
  let sum = 0;
  let pairCount = 1;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // Current sum exceeds
    if (sum > mid) {
      pairCount++;
      sum = nums[i];
    }
  }
  return pairCount <= m;
};
const nums = [1, 2, 3, 4, 5];
const m = 2;
console.log(splitArray(nums, m));

// faster than 100.00% of JavaScript online submissions for Split Array Largest Sum.
