// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Return the first highest, second highest and so on...
// O(n) time and O(n) space complexity solution.
var topKFrequent = function (nums, k) {
  const res = [];
  const freqMap = {};
  const listMap = {};
  let maxFreq = 0;

  for (const num of nums) {
    if (!freqMap[num]) {
      freqMap[num] = 1;
    } else {
      freqMap[num] += 1;
    }
    const freq = freqMap[num];
    maxFreq = Math.max(maxFreq, freq);
  }
  for (const [key, value] of Object.entries(freqMap)) {
    if (!listMap[value]) {
      listMap[value] = [key];
    } else {
      listMap[value].push(key);
    }
  }

  while (res.length !== k) {
    if (listMap[maxFreq]) {
      while (listMap[maxFreq].length > 0 && res.length !== k) {
        res.push(listMap[maxFreq].pop());
      }
    }
    maxFreq--;
  }

  console.log(res);
  return res;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 4;
console.log(topKFrequent(nums, k));
