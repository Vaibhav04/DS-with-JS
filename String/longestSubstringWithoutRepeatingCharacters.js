// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */

// O(n) time and O(n) space complexity
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let maxLength = 0;
  const seenChars = {};
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let prevSeenVal = seenChars[s[right]];
    if (prevSeenVal >= left) {
      left = prevSeenVal + 1;
    }
    seenChars[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));
