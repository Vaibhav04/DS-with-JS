// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

var getRow = function (rowIndex) {
  const res = new Array(rowIndex + 1);
  console.log(res.length);
  let currentVal = 1;
  res[0] = currentVal;
  res[res.length - 1] = 1;
  for (let i = 1; i <= rowIndex / 2; i++) {
    currentVal *= rowIndex - i + 1;
    currentVal /= i;
    console.log(currentVal);

    let left = i;
    let right = res.length - i - 1;
    console.log(left, right);
    if (left !== right) {
      res[res.length - i - 1] = currentVal;
    }
    res[i] = currentVal;
  }
  console.log(res);
};

const rowIndex = 33;
console.log(getRow(rowIndex));
