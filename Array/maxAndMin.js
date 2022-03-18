const findMaxAndMin = (arr) => {
  let max = Number.MIN_VALUE,
    min = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    max = Math.max(max, element);
    min = Math.min(min, element);
  }
  console.log(max, min);
};

const arr = [1111111111111111111, 0];
findMaxAndMin(arr);
