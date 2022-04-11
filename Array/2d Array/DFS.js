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

const DFS = (matrix, row, col, seen, DFSRes) => {
  if (
    row < 0 ||
    row >= testMatrix.length ||
    col < 0 ||
    col >= testMatrix[0].length ||
    seen[row][col] === true
  )
    return;

  seen[row][col] = true;
  DFSRes.push(testMatrix[row][col]);

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    DFS(matrix, row + direction[0], col + direction[1], seen, DFSRes);
  }
};

const traverseDFS = () => {
  const DFSRes = [];
  const seen = new Array(testMatrix.length)
    .fill(0)
    .map(() => new Array(testMatrix[0].length).fill(false));

  DFS(testMatrix, 0, 0, seen, DFSRes);

  return DFSRes;
};
const res = traverseDFS();
console.log(res);
