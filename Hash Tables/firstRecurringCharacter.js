// Input :- [2, 5, 1, 2, 3, 4, 1]
// Output :- 2

function firstRecurringCharacter(arr) {
  const charMap = {};
  for(let item of arr) {
    if(!charMap[item]) {
      charMap[item] = true;
    } else {
      return item;
    }
    
  }
  return undefined
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 4, 7]))