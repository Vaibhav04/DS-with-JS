let count = 0;
let sum = 0;
const getFibonacci =(value) => {
  if(value < 2) return value;

  return getFibonacci(value-1) + getFibonacci(value-2)
}

console.log(getFibonacci(5))