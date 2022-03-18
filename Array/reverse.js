// O(n) time O(1) space complexity
const reverse = (arr) => {
  if (arr.length < 2) return arr;
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

const arr = [1, 2, 3, 4, 5];
reverse(arr);
console.log(arr);
