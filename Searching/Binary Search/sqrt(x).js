var mySqrt = function (x) {
  let left = 0,
    right = Math.floor(x / 2) + 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const val = mid * mid;
    if (val === x) return mid;
    if (x < val) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    console.log(left, right);
  }
  return right;
};

const num = 6;
console.log(mySqrt(num));
