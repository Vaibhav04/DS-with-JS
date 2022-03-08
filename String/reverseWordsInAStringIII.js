// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"

var reverseWords = function (s) {
  if (s.length === 1) return s;
  let splitedStr = s.split(' ');

  for (let i = 0; i < splitedStr.length; i++) {
    splitedStr[i] = splitedStr[i].split('').reverse().join('');
  }

  return splitedStr.join(' ');
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
