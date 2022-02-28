const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minItemIndex = i;
    let minItem = arr[i]
    
    let j = i;
    while(j< arr.length) {
      if(arr[j] < minItem) {
        minItemIndex = j;
        minItem = arr[j]
      }
      j++;
    }

    if(minItemIndex != i) {
        [arr[i], arr[minItemIndex]] = [arr[minItemIndex], arr[i]]
      
    }
  }
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
selectionSort(arr)
console.log(...arr)