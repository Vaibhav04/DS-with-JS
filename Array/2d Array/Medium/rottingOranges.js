// You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

var orangesRotting = function (grid) {
  let freshOranges = 0;
  let queue = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const orangeStatus = grid[i][j];
      console.log(orangeStatus);
      if (orangeStatus === 1) {
        freshOranges++;
      } else if (orangeStatus === 2) {
        console.log('o');
        queue.push([i, j]);
      }
    }
  }

  let currQueueLength = queue.length;
  let minutes = 0;
  while (queue.length > 0) {
    if (currQueueLength === 0) {
      currQueueLength = queue.length;
      minutes++;
    }
    const [row, col] = queue.shift();
    currQueueLength--;

    for (let i = 0; i < directions.length; i++) {
      const direction = directions[i];
      const nextRow = row + direction[0];
      const nextCol = col + direction[1];

      if (
        nextRow < 0 ||
        nextRow >= grid.length ||
        nextCol < 0 ||
        nextCol >= grid[0].length ||
        grid[nextRow][nextCol] === 0
      )
        continue;

        // If current orange is fresh, rotten it and push its index in queue
      if (grid[nextRow][nextCol] === 1) {
        // console.log('curent nextRow and nextCol', nextRow, nextCol);
        grid[nextRow][nextCol] = 2;
        queue.push([nextRow, nextCol]);

        freshOranges--;
      }
    }
  }
  console.log(freshOranges, queue);
  console.log(minutes);
  return freshOranges === 0 ? minutes : -1;
};

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(orangesRotting(grid));
