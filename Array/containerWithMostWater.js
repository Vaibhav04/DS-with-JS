const containerWithMostWater = (height) => {
  let p1 = 0, p2 = height.length - 1, maxArea = 0;

  while (p1 < p2) {

    const barHeight = Math.min(height[p1], height[p2])
    const width = p2 - p1;
    const area = barHeight * width;

    maxArea = Math.max(maxArea, area);
n
    if (height[p1] < height[p2]) {
      p1++
    } else {
      p2--;
    }
  }
  return maxArea;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))