// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
// Example 1:
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]

// Example 2:
// Input: n = 1
// Output: [[1]]

var generateMatrix = function (n) {
  const res = new Array(n);
  for (let i = 0; i < res.length; i++) {
    res[i] = new Array(n);
  }

  console.log(res);
  let count = 1;

  let topRow = 0,
    bottomRow = res.length - 1;
  let leftCol = 0,
    rightCol = res[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    let col = leftCol;
    while (col <= rightCol) {
      res[topRow][col] = count++;
      col++;
      console.log(res[topRow]);
    }
    topRow++;
    console.log('After top row', res);

    let row = topRow;
    while (row <= bottomRow) {
      res[row][rightCol] = count++;
      row++;
    }
    rightCol--;
    console.log('After righ col', res);

    col = rightCol;
    while (col >= leftCol) {
      res[bottomRow][col] = count++;
      col--;
    }
    bottomRow--;

    row = bottomRow;
    while (row >= topRow) {
      res[row][leftCol] = count++;
      row--;
    }
    leftCol++;
  }

  return res;
};
const res = generateMatrix(4);

for (const arr of res) {
  console.log(arr);
}
