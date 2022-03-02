let calculations = 0;
const fibonacci = () => {
  const data = {};

  return function getFibonacci(num) {
    if(num < 2) {
      return num;
    }

    // Comment this code to check the comparison
    if(data[num]) {
      return data[num];
    }
    // calculations++;
    data[num] =  getFibonacci(num-1) + getFibonacci(num-2);
    return data[num];
  }
}

const betterFibonacci = fibonacci();
console.log(betterFibonacci(20))
// console.log(calculations)