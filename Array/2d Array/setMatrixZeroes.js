// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.
// O(n^3) in worst case (Bad solution)
// var setZeroes = function (matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       const element = matrix[i][j];

//       if (element === 0) {
//         for (let k = 0; k < matrix.length; k++) {
//           if (matrix[k][j] !== 0) {
//             matrix[k][j] = true;
//           }
//         }

//         for (let k = 0; k < matrix[0].length; k++) {
//           if (matrix[i][k] !== 0) {
//             matrix[i][k] = true;
//           }
//         }
//       }
//     }
//   }

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       const elem = matrix[i][j];
//       if (elem === true) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
// };

// O(n*m) Optimal solution
var setZeroes = function (matrix) {
  let setZero = false,
    rows = matrix.length,
    cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) setZero = true;
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = matrix[i][0] = 0;
      }
    }
  }
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 1; j--) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (setZero === true) matrix[i][0] = 0;
  }
};

const matrix = [
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 0],
];
setZeroes(matrix);
// for (const mat of matrix) {
//   console.log(mat);
// }
console.log(matrix);
