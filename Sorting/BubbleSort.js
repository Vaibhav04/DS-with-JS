const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
      }
    }
  }
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
bubbleSort(arr)
console.log(arr)