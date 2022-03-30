// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

/** Explanation
 * 1. Create two hashmap, 
 *  - One for word to char.
 *  - Another for char to word.
 * 2. Keep storing and return false, If at any stage:-
 *  - If current word does not map to same character as it was previously mapping.
 *  - If current char does not map to same word as it was previously mapping.
 */

// O(m+n) time and o(m+n) space 
var wordPattern = function (pattern, s) {
  let i = 0;
  const strArr = s.split(' ');
  const charMap = {};
  const wordMap = {};
  if (pattern.length !== strArr.length) return false;
  console.log(strArr);

  while (i < pattern.length) {
    // console.log(patternMap);
    const char = pattern[i];
    const word = strArr[i];
    if (charMap[char] && charMap[char] !== word) return false;
    if (wordMap[word] && wordMap[word] !== char) return false;
    charMap[char] = word;
    wordMap[word] = char;
    i++;
  }
  return true;
};
const pattern = 'abba';
const str = 'dog cat cat dog';
console.log(wordPattern(pattern, str));
