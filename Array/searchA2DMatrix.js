// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
let count = 0;
var searchMatrix = function (matrix, target) {
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
      if (mc === 0 || target < matrix[mr][0]) {
        br = mr - 1;
        rc = matrix[0].length - 1;
      } else {
        br = mr;
        rc = mc - 1;
      }
    } else if (target > middleVal) {
      if (
        mc === matrix[0].length - 1 ||
        target > matrix[mr][matrix[0].length - 1]
      ) {
        tr = mr + 1;
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
