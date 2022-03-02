var isSubsequence = function(s, t) {
  s = s.trim();
  t = t.trim();
  if(s === t) return true;
  let sIndex = 0, tIndex = 0, count = 0;

  while(count < t.length) {
    if(s[sIndex] === t[tIndex]) {
      sIndex++;
    }
      tIndex++;
    console.log(sIndex, tIndex);

    if(sIndex === s.length) {
      return true;
    }
    count++;
  }
  return false;
    
};

console.log(isSubsequence("abc", "abc.     "));