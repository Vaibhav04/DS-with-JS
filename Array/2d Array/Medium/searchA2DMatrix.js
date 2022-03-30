// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

/** Solution
 * It is same as binary search for 1D array.
 * The only difference is how we keep track of indexes while searching for target.
 * In 1D array if target is less than current element we simply move toward left, But in 2D array there will be cases where we have to search target in previous row. Same goes for target greater than value at middle. In this case, either target will be in current row or next row.
 */
let count = 0;
var searchMatrix = function (matrix, target) {
  // If target is less than top left or target is greater than bottom right. It means target is not in matrix.
  if (
    target < matrix[0][0] ||
    target > matrix[matrix.length - 1][matrix[0].length]
  )
    return false;
  let tr = 0,
    br = matrix.length - 1;
  let lc = 0,
    rc = matrix[0].length - 1;
  let mr, mc;

  while (tr <= br && lc <= rc) {
    mr = Math.floor((tr + br) / 2);
    mc = Math.floor((lc + rc) / 2);

    const middleVal = matrix[mr][mc];
    console.log(
      `Mr is ${mr} and Mc is ${mc} val at middle is ${middleVal} \n Tr is ${tr} and Br is ${br} \n Lc is ${lc} and Rc is ${rc}`
    );

    // console.log(target, middleVal, target === middleVal);
    if (target === middleVal) return true;

    if (target < middleVal) {
      // Case 1:- If middle column reach at leftmost column, then we will search in previous row.
      // Case 2 :- If target is less than value at leftmost column, then there is a chance we will get target in previous row.
      if (mc === 0 || target < matrix[mr][0]) {
        // Decrement bottom row
        br = mr - 1;
        // Update right column to rightmost column.
        rc = matrix[0].length - 1;
      } else {
        br = mr;
        rc = mc - 1;
      }
    } else if (target > middleVal) {
      // Case 1:- If middle column reach at rightmost column, then we will search in next row.
      // Case 2 :- If target is greater than value at rightmost column, then there is a chance we will get target in next row
      if (
        mc === matrix[0].length - 1 ||
        target > matrix[mr][matrix[0].length - 1]
      ) {
        // Increment top row
        tr = mr + 1;
        // Update left column to leftmost column.
        lc = 0;
      } else {
        tr = mr;
        lc = mc + 1;
      }
    }
  }
  return false;
};

const matrix = [
  [-10, -8, -6, -4, -3],
  [0, 2, 3, 4, 5],
  [8, 9, 10, 10, 12],
];
console.log(matrix);
console.log('Returned value', searchMatrix(matrix, 0));
