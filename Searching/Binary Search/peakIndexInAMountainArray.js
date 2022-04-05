// Let's call an array arr a mountain if the following properties hold:
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
// Example 1:
// Input: arr = [0,1,0]
// Output: 1

// Example 2:
// Input: arr = [0,2,1,0]
// Output: 1

// Example 3:
// Input: arr = [0,10,5,2]
// Output: 1
var peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log(arr[mid], mid - 1);
    if (mid === 0) return 1;
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
    // Find in left part
    if (arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1]) right = mid - 1;
    // Find in right part
    else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) left = mid + 1;
  }
};

const arr = [3, 2, 1, 0, 5];
console.log(peakIndexInMountainArray(arr));
