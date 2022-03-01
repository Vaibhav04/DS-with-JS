var summaryRanges = function(nums) {
  const res =[];
    for(let i = 0; i< nums.length;i++) {
      let j = i;
        let valueToAdd = nums[i]
      while(j<nums.length) {
        // console.log(nums[j]+, nums[j]+1)
        if(nums[j]+1 === nums[j+1]) {
          valueToAdd = nums[j+1];
          j++;
          console.log(valueToAdd)
        } else {
          
        break;
        }
      }
      if(nums[i] != valueToAdd) {
        res.push(`${nums[i]}->${valueToAdd}`)  
      } else {
        res.push(`${valueToAdd}`)
      }
      i = j;
    }
    return res;
};



// Input :- [0,1,2,4,5,7]
// Output :- ["0->2","4->5","7"]
const nums = [0,1,2,4,5,7];
console.log(summaryRanges(nums))