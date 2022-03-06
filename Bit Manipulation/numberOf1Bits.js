// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

// Not an efficient solution
// var hammingWeight = function (n) {
//   let data = new Array(32).fill(0);
//   data[0] = 0;
//   console.log(data);
//   for (let i = 1; i < data.length; i++) {
//     const parentIndex = Math.floor(i / 2);
//     data[i] = data[parentIndex] + (i % 2);
//   }
//   return data[n];
// };

// Alternative approach
var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    n &= n - 1;
    count++;
  }
  return count;
};

const num = 11;
console.log(hammingWeight(num));
