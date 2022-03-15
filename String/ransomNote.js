// Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// O(n) time and O(1) space complexity
var canConstruct = function (ransomNote, magazine) {
  let i = 0;
  const charMap = {};
  //   Store char and their occurence in map
  while (i < magazine.length) {
    const char = magazine[i];
    if (charMap[char] >= 1) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
    i++;
  }

  //   If string can be made or not
  i = 0;
  while (i < ransomNote.length) {
    const char = ransomNote[i];
    if (charMap[char] >= 1) {
      charMap[char]--;
    } else {
      return false;
    }
    i++;
  }
  return true;
};

const ransomNote = 'aa';
const magazine = 'aab';
console.log(canConstruct(ransomNote, magazine));
