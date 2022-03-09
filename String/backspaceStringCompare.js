// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

var backspaceCompare = function (s, t) {
  let p1 = s.length - 1,
    p2 = t.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === '#' || t[p2] === '#') {
      if (s[p1] === '#') {
        let decrementBy = 2;

        while (decrementBy > 0) {
          p1--;
          decrementBy--;

          if (s[p1] === '#') decrementBy += 2;
        }
      }

      if (t[p2] === '#') {
        let decrementBy = 2;

        while (decrementBy > 0) {
          p2--;
          decrementBy--;

          if (t[p2] === '#') decrementBy += 2;
        }
      }
    } else {
      if (s[p1] !== t[p2]) return false;
      p1--;
      p2--;
    }
  }
  return true;
};

const s = 'bxj##tw';
const t = 'bxj###tw';
console.log(backspaceCompare(s, t));
