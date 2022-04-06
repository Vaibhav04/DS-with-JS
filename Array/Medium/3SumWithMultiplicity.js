// Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.
// As the answer can be very large, return it modulo 109 + 7.
// Example 1:
// Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
// Output: 20
// Explanation:
// Enumerating by the values (arr[i], arr[j], arr[k]):
// (1, 2, 5) occurs 8 times;
// (1, 3, 4) occurs 8 times;
// (2, 2, 4) occurs 2 times;
// (2, 3, 3) occurs 2 times.

// Example 2:
// Input: arr = [1,1,2,2,2,2], target = 5
// Output: 12
// Explanation:
// arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
// We choose one 1 from [1,1] in 2 ways,
// and two 2s from [2,2,2,2] in 6 ways.

// Constraints:

// 3 <= arr.length <= 3000
// 0 <= arr[i] <= 100
// 0 <= target <= 300

// O(n^2) time and O(1) space (because 0 <= arr[i] <= 100)
// Video url :- https://www.youtube.com/watch?v=_0wLomqNVHU
var threeSumMulti = function (arr, target) {
  const freqMap = new Map();
  for (const num of arr) {
    if (freqMap.has(num)) freqMap.set(num, freqMap.get(num) + 1);
    else freqMap.set(num, 1);
  }
  console.log(freqMap);

  let ans = 0;
  for (const [num1, freq1] of freqMap.entries()) {
    for (const [num2, freq2] of freqMap.entries()) {
      let num3 = target - num1 - num2;
      const freq3 = freqMap.get(num3);
      if (freqMap.has(num3)) {
        if (num1 === num2 && num2 === num3) {
          ans += (freq1 * (freq1 - 1) * (freq1 - 2)) / 6;
        } else if (num1 === num2 && num1 !== num3) {
          ans += ((freq1 * (freq1 - 1)) / 2) * freq3;
        } else if (num1 < num2 && num2 < num3) {
          ans += freq1 * freq2 * freq3;
        }
      }
    }
  }
  console.log(ans);
  ans = ans % 1000000007;

  return ans;
};

const arr = [0, 0, 0],
  target = 0;
console.log(threeSumMulti(arr, target));
