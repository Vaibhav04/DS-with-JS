function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  console.log(`middle is ${middle}`)
  console.log(`Left is ${left} and right is ${right}`)

  let sorted = merge(
    mergeSort(left),
    mergeSort(right)
  )
  return sorted
}

function merge(left, right) {
  let currA = 0, endA = left.length;
  let currB = 0, endB = right.length;
  const res = [];


  while (currA < endA && currB < endB) {
    if (left[currA] <= right[currB]) {
      res.push(left[currA]);
      currA++;
    } else if (right[currB] < left[currA]) {
      res.push(right[currB]);
      currB++
    }

  }


  while (currA < endA) {
    res.push(left[currA]);
    currA++;
  }

  while (currB < endB) {
    res.push(right[currB]);
    currB++;
  }

  console.log(`After merging ${res}\n`);
  return res;

}

const arr = [6, 5, 3, 1, 8, 7, 2, 4, 6];
console.log(mergeSort(arr))