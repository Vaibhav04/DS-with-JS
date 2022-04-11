const testMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const BFS = () => {
  // This queue should be implemented with linked list because removing from front is O(1) time, whereas in array it is O(n)
  const queue = [[0, 0]];
  const BFSRes = [];
  const seen = new Array(testMatrix.length)
    .fill(0)
    .map(() => new Array(testMatrix[0].length).fill(false));

  while (queue.length > 0) {
    let [row, col] = queue.shift();
    if (
      row < 0 ||
      row >= testMatrix.length ||
      col < 0 ||
      col >= testMatrix[0].length ||
      seen[row][col] === true
    )
      continue;

    seen[row][col] = true;
    BFSRes.push(testMatrix[row][col]);

    for (let i = 0; i < directions.length; i++) {
      const direction = directions[i];
      queue.push([row + direction[0], col + direction[1]]);
    }
  }

  return BFSRes;
};
const res = BFS();
console.log(res);
