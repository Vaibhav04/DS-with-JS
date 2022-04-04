// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.
// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.
// Example 1:
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:
// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]
var findRepeatedDnaSequences = function (s) {
  const res = [];
  const DNAData = {};
  for (let i = 0; i < s.length - 9; i++) {
    const dna = s.substring(i, i + 10);
    console.log(dna);

    if (!DNAData[dna]) DNAData[dna] = 1;
    else DNAData[dna]++;
    if (DNAData[dna] === 2) res.push(dna);
  }
  console.log(DNAData);
  return res;
};

const str = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';
console.log(findRepeatedDnaSequences(str));
