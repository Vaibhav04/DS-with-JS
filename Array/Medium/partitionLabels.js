// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
// Return a list of integers representing the size of these parts.
// Example 1:
// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// Example 2:
// Input: s = "eccbbbbdec"
// Output: [10]

/** Solution
 * 1. Get the last occurrence of each characters and store in a map.
 * 2. Traverse the string and update "end" if you find a character whose last index is more than index of current character.
 * 3. Increase the size (The length of string that can be partitioned) as you traverse.
 * 4. Once index reaches end, it means this partition can be made. Push the size in result array.
 * 5. Find next partition.
 */

// O(n) time and O(1) space complexity.
var partitionLabels = function (s) {
  const charEndMap = {};
  const res = [];
  for (let i = 0; i < s.length; i++) {
    charEndMap[s[i]] = i;
  }

  let size = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    size += 1;
    end = Math.max(end, charEndMap[char]);

    if (i === end) {
      res.push(size);
      size = 0;
    }
    if (i === s.length) break;
  }
  console.log(charEndMap);

  return res;
};

const str = 'ababcbacadefegdehijhklij';
console.log(partitionLabels(str));
