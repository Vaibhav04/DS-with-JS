// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// O(n) time complexity O(1) space complexity
const reverse = (str) => {
  let left = 0,
    right = str.length - 1;

  while (left <= right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
  console.log(str);
};

const str = ['H', 'a', 'n', 'n', 'a', 'h'];
reverse(str);
