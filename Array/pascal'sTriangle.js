// Given an integer numRows, return the first numRows of Pascal's triangle.

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

var generate = function (numRows) {
  const res = new Array(numRows);

  for (let i = 0; i < res.length; i++) {
    res[i] = new Array(i + 1);
    res[i][0] = 1;
    for (let j = 1; j < res[i].length; j++) {
      if (i === j) {
        res[i][j] = 1;
      } else {
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
      }
    }
  }

  return res;
};

console.log(generate(5));
