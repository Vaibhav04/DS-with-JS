// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
// Example 1:
// Input: num1 = "11", num2 = "123"
// Output: "134"

// Example 2:
// Input: num1 = "456", num2 = "77"
// Output: "533"

// Example 3:
// Input: num1 = "0", num2 = "0"
// Output: "0"

var addStrings = function (num1, num2) {
  if (!num1 || !num2) return num1 || num2;
  if (num1.length === 0 && num2.length === 0) return '';
  if (num1.length === 0) return num2;
  if (num2.length === 0) return num1;
  let i = num1.length - 1,
    j = num2.length - 1;

  console.log(i);
  let carry = 0;
  let res = '';
  while (i >= 0 || j >= 0) {
    let sum = 0;
    sum += i >= 0 ? Number(num1[i]) : 0;
    sum += j >= 0 ? Number(num2[j]) : 0;
    sum += carry;

    console.log(sum, carry);
    carry = sum > 9 ? 1 : 0;
    sum = sum % 10;
    i--;
    j--;
    res = +sum + res;
  }
  if (carry !== 0) res = +carry + res;
  console.log(res);
};

const nums1 = '456';
const nums2 = '77';
console.log(addStrings(nums1, nums2));
