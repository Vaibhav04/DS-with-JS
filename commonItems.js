const arr1 = ['a', 'b', 'e', 'r', 'f'];
const arr2 = ['s', 't', 'm', 'f']

function containCommonItems(arr1, arr2) {
  const map = {};

  for(let item of arr1) {
    if(!map[item]) {
      map[item] = true
    }
  }

  // console.log(map)

  for(let item of arr2) {
    if(map[item]) return true
  }

  return false
}

console.log(containCommonItems(arr1, arr2))