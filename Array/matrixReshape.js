// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:
// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Example 2:
// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

var matrixReshape = function (mat, r, c) {
  let noOfElements = mat.length * mat[0].length;
  console.log(noOfElements);

  if (r * c !== noOfElements) return mat;

  const res = [];
  let rowCountForMat = 0;
  let colCountForMat = 0;

  for (let i = 0; i < r; i++) {
    res[i] = new Array(c);
    for (let j = 0; j < c; j++) {
      const elementToPush = mat[rowCountForMat][colCountForMat];
      res[i][j] = elementToPush;

      if (colCountForMat === mat[0].length - 1) {
        rowCountForMat++;
        colCountForMat = 0;
      } else {
        colCountForMat++;
      }
    }
  }

  return res;
};

const mat = [
  [1, 2],
  [3, 4],
];
const r = 1,
  c = 4;

console.log(matrixReshape(mat, r, c));
