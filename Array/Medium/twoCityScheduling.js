// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

// Example 1:
// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation:
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

// Example 2:
// Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
// Output: 1859

// Example 3:
// Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
// Output: 3086

/** Solution
 * Sort the costs array w.r.t profit that we will make.
 * After sorting, the "bCosti" will the best in upper half of costs array whereas, in lower half "aCosti" will be best.
 * So for the first half, we will pick "bCosti" and for second half we will pick "aCosti" and keep adding these to totalCost
 * Return totalCost in end.
 */

// O(n) time O(log n) space complexity
var twoCitySchedCost = function (costs) {
  let totalCost = 0;
  costs.sort((a, b) => {
    console.log(a, b);
    // console.log(a);
    return b[0] - b[1] - (a[0] - a[1]);
  });
  for (const cost of costs) {
    console.log(`cost is ${cost}, Diff is ${cost[1] - cost[0]}`);
  }
  for (let i = 0; i < costs.length / 2; i++) {
    totalCost += costs[i][1];
  }
  for (let i = costs.length / 2; i < costs.length; i++) {
    totalCost += costs[i][0];
  }
  return totalCost;
};

const costs = [
  [515, 563],
  [451, 713],
  [537, 709],
  [343, 819],
  [855, 779],
  [457, 60],
  [650, 359],
  [631, 42],
];
console.log(twoCitySchedCost(costs));
