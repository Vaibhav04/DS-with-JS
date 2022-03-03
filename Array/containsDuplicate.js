// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
  const numsHash = {}

  for(let num of nums) {
    if(numsHash[num]) {
      return true;
    } else {
      numsHash[num] = true;
    }
  }
  return false; 
};

const nums = [1,2,3,4, 1];

console.log(containsDuplicate(nums))