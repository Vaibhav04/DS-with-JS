// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// var maxProfit = function (prices) {
//   let left = 0,
//     right = prices.length - 1,
//     minVal = Number.MAX_SAFE_INTEGER,
//     maxVal = Number.MIN_SAFE_INTEGER,
//     maxDiff = 0;

//   while (left <= right) {
//     if (prices[left] < minVal) {
//       minVal = prices[left];
//     }
//     if (prices[right] > maxVal) {
//       maxVal = prices[right];
//     }

//     const currentDifference = maxVal - minVal;
//     console.log(currentDifference);
//     if (maxDiff < currentDifference) {
//       maxDiff = currentDifference;
//     }
//     left++;
//     right--;
//   }

//   return maxDiff;
// };

var maxProfit = function (prices) {
  let i = 0,
    maxDiff = 0,
    minPrice = Number.MAX_VALUE;

  while (i < prices.length) {
    minPrice = Math.min(minPrice, prices[i]);
    maxDiff = Math.max(maxDiff, prices[i] - minPrice);
    i++;
  }

  return maxDiff;
};

const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));

// input[(2, 4, 1)];
// Output;
// 0;
// Expected;
// 2;
