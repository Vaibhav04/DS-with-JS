function mergeSortedArrays(arr1, arr2) {

  if(arr1.length === 0) {
    return arr2;
  } 
  if(arr2.length === 0) {
    return arr1
  }
  
  // Make two counters
  let i = 0;
  let j = 0;

  // Create new array 
  const newArr = []
  let item;

  // If item in first arr at current index is smaller or equal then, push it into new arr otherwise increase the counter and push the item from second array 
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      item = arr1[i]
      i++;
    } else {
      item = arr2[j]
      j++;
    }
    newArr.push(item)
  }

  if (arr1.length > arr2.length) {
    // Shift rest of the items from first array
    for (let k = i; k < arr1.length; k++) {
      newArr.push(arr1[k])
    }
    // shiftItems(arr1, index)
  } else {
    // Shift rest of the items from second array
    for (let k = i; k < arr2.length; k++) {
      newArr.push(arr2[k])
    }

  }

  return newArr
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))