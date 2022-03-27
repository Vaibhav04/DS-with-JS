// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.
// A row i is weaker than a row j if one of the following is true:
// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

// Example 1:
// Input: mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// Output: [2,0,3]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 2
// - Row 1: 4
// - Row 2: 1
// - Row 3: 2
// - Row 4: 5
// The rows ordered from weakest to strongest are [2,0,3,1,4].

// Example 2:
// Input: mat =
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]],
// k = 2
// Output: [0,2]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 1
// - Row 1: 4
// - Row 2: 1
// - Row 3: 1
// The rows ordered from weakest to strongest are [0,2,3,1]

/** Solution
 * 1. Count 1 for each row index.
 * 2. Create 1D frequency array same as size of matrix and add
 * array[row] = {
 *  count: 'No of 1 in current row',
 *  index: 'Current row index
 * }
 * 3. Sort frequency array acc to their frequency of 1's.
 * 4. Finally, add the index for k no of items in res array.
 *
 * We can also use binary search here to count the number of ones in current row.
 * As 1s are place before 0s so we can get last occurence of 1 in current row in (log n) time instead of O(n).
 */

// O(m*n) time complexity and O(m) space.
var kWeakestRows = function (mat, k) {
  const res = [];
  const freqArr = new Array(mat.length);
  for (let i = 0; i < mat.length; i++) {
    let solCount = 0;
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) solCount++;
    }
    freqArr[i] = {
      count: solCount,
      index: i,
    };
  }

  freqArr.sort((a, b) => {
    return a.count - b.count;
  });
  console.log(freqArr);

  let i = 0;
  while (i < k) {
    res.push(freqArr[i].index);
    i++;
  }
  return res;
};

const mat = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
];
const k = 1;
console.log(kWeakestRows(mat, k));
