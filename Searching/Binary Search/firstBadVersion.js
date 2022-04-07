/** Explanation
 * This problem is same as finding first occurence of number in sorted array.
 * In that problem, whenever we find target we check if target appears before current mid index. If it does we update the position with minimum possible index where value is equal to given target.
 * Similary, in this problem, after finding the bad version we reduce the problem by assigning "right" to "mid-1" to check if bad version occurs at any index prior to our current "mid" index. If it does, we update the "pos" variable which is being used to keep track of minimum index where bad version occurs.
 */

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0,
      right = n;
    let pos = -1;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      let isBad = isBadVersion(middle);
      if (isBad) {
        //   Keeping track of bad version index
        pos = middle;
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return pos;
  };
};
