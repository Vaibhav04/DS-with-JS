// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// O(n logn ) time O(logn or O(n) in worst case) space
var merge = function (intervals) {
  // Sort the intervals
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    // If previous interval ends after current item start, then merge
    if (res[res.length - 1][1] >= start) {
      const lastEnd = res[res.length - 1][1];
      //   console.log(res);
      // Update the ending time of new interval as the maximum of last interval's end and current interval end
      res[res.length - 1][1] = Math.max(lastEnd, end);
    } else {
      // If previous interval ends before current item start, then simply add this interval in result array.
      res.push([start, end]);
    }
  }
  return res;
};

const intervals = [
  [1, 4],
  [4, 5],
];
const res = merge(intervals);

for (const arr of res) {
  console.log('hey');
  console.log(arr);
}
