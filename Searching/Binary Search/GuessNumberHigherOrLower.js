// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
// You call a pre-defined API int guess(int num), which returns three possible results:
// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.
// Example 1:
// Input: n = 10, pick = 6
// Output: 6

// Example 2:
// Input: n = 1, pick = 1
// Output: 1

// Example 3:
// Input: n = 2, pick = 1
// Output: 1

// let number = Math.floor(Math.random() * 6);
// console.log(number);
// const guess = (n) => {
//   if (n > number) return -1;
//   if (n < number) return 1;
//   if (n === number) return 0;
// };
var guessNumber = function (n) {
  let left = 1,
    right = n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    /** A api function thst was given to */
    // const guessRes = guess(mid);
    // Remove this code while executing
    const guessRes = 0;

    console.log(guessRes, mid);
    if (guessRes === 0) return mid;
    if (guessRes === -1) right = mid - 1;
    else left = mid + 1;
  }
};

console.log(guessNumber(3));
