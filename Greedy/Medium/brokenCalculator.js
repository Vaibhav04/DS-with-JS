// There is a broken calculator that has the integer startValue on its display initially. In one operation, you can:
// multiply the number on display by 2, or
// subtract 1 from the number on display.
// Given two integers startValue and target, return the minimum number of operations needed to display target on the calculator.
// Example 1:
// Input: startValue = 2, target = 3
// Output: 2
// Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.

// Example 2:
// Input: startValue = 5, target = 8
// Output: 2
// Explanation: Use decrement and then double {5 -> 4 -> 8}.

// Example 3:
// Input: startValue = 3, target = 10
// Output: 3
// Explanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.

/** Solution
 * By going from startVal to target we will have to traverse unneccassary node.
 * So we move from target to startVal.
 * 1. If current target is even, then it is sure that it would have come from multiplying previous number by 2. On the other hand, if it is odd then it would have come by subtracting 1 from even.
 * 2. In our solution, we are doing same, i.e divding the target if current target is even, else we are adding 1 to it.
 * Before procceding forward, there is one important point
 *  - If at any place the target is less than startVal then, it is clear that it has been subtraced by 1 (target-starVal) times. Draw a diagram to get better understanding.
 * 3. We will repeat the same logic and increment the count untill we reach at a place where target becomes <= startVal.Because at this stage we can directly get the remaining steps by above stated logic.
 */

// O(n) time and O(1) space complexity
var brokenCalc = function (startVal, target) {
  let count = 0;
  while (startVal < target) {
    if (target % 2 === 0) {
      target /= 2;
    } else {
      target += 1;
    }
    count++;
  }
  count += startVal - target;
  return count;
};

console.log(brokenCalc(5, 20));
