var average = function (salary) {
  let maxSal = Math.max(...salary);
  let minSalary = Math.min(...salary);

  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    sum += salary[i];
  }

  sum = sum - maxSal - minSalary;

  return sum / (salary.length - 2);
};
salary = [4000, 3000, 1000, 2000];

console.log(average(salary));
