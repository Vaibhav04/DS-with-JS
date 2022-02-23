var twoSum = function(nums, target) {
    const map = {}
    
    for(let i = 0; i < nums.length; i++) {
      if(map[i] !== i) {
        map[nums[i]] = i
      }
    }

  console.log('sds')
    
    for(let i = 0; i< nums.length; i++) {
      let value = nums[i]
      // For every value in nums array check if target - value exist in map?
      // Also check if both do not have same index
      // map[target - value] >= 0 (To check if this value exist in map, otherwise it would act as a falsy value)
        if( map[target - value] >= 0 && i !== map[target - value] ) return [map[target-value], i]
    }
    
};

console.log(twoSum([0, 1, 2, 3], 3))