const insertionSort = (arr) => {
  let i =0;
  while(i < arr.length) {    
    if(arr[i+1] < arr[i]) {
      k = i;
      while(arr[k+1] < arr[k] && k >= 0) {
        [arr[k+1], arr[k]] = [arr[k], arr[k+1]]
        k--;
      }
    }
    i++;
  }
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
insertionSort(arr)