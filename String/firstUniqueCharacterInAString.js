// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// O(n) time O(1) space complexity.
var firstUniqChar = function (s) {
  const charMap = {};

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (charMap[element] > 0) {
      charMap[element] += 1;
    } else {
      charMap[element] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const element = charMap[s[i]];
    if (element === 1) return i;
  }
  return -1;
};

const str = 'leetcode';
console.log(firstUniqChar(str));
