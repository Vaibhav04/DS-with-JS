// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Example 1:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true

// Example 2:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false

// TODO add explanations for this problem.
const BinarySearch = (mat, i, j, target) => {
  // Binary search on row
  let row = i,
    left = j,
    right = mat[0].length - 1;

  if (target <= mat[row][right]) {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const currVal = mat[row][mid];

      if (target === currVal) {
        return true;
      } else if (target < currVal) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return false;
};

var searchMatrix = function (matrix, target) {
  let itemExist = false;
  if (
    target < matrix[0][0] ||
    target > [matrix.length - 1][matrix[0].length - 1] ||
    !matrix ||
    !matrix.length
  )
    return false;
  for (let i = 0; i < matrix.length; i++) {
    let j = 0;
    itemExist = BinarySearch(matrix, i, j, target);

    if (itemExist !== false) {
      return itemExist;
    }
  }
  return false;
};

// Better Approach
var searchMatrix = function (matrix, target) {
  let i = matrix.length - 1,
    j = 0;
  while (i >= 0 && j <= matrix[0].length - 1) {
    let val = matrix[i][j];
    if (target === val) {
      return true;
    } else if (target < val) {
      i--;
    } else {
      j++;
    }
  }
  return false;
};
// const matrix = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30],
// ];

const matrix = [
  [1, 4],
  [2, 5],
  [3, 6],
  [10, 13],
  [18, 21],
];

const res = [];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    const element = matrix[i][j];
    res.push(searchMatrix(matrix, element));
  }
}
console.log(res);
