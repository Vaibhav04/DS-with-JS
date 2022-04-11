// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
// The area of an island is the number of cells with a value 1 in the island.
// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:
// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0


/** Explanation
 * Traverse the grid and whenever we find an island we do BFS from that index.
 * Also, we maintain area of current island so as and return the maximum area in the end.
 */
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

var maxAreaOfIsland = function (grid) {
  let maxArea = Number.MIN_SAFE_INTEGER;

  //   Find island sequentially
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const element = grid[i][j];
      if (element === 1) {
        //   Do BFS to get island area
        let queue = [[i, j]];

        let area = 0;
        while (queue.length > 0) {
          const [row, col] = queue.shift();
          if (
            row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length ||
            grid[row][col] === 0
          )
            continue;
          if (grid[row][col] === 1) {
            // console.log('curent row and col', row, col);
            grid[row][col] = 0;
            area++;
          }
          for (let k = 0; k < directions.length; k++) {
            const dir = directions[k];
            queue.push([row + dir[0], col + dir[1]]);
          }
          //   console.log(queue);
        }
        // console.log(area);
        maxArea = Math.max(area, maxArea);
      }
    }
  }
  return maxArea === Number.MIN_SAFE_INTEGER ? 0 : maxArea;
};

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
console.log(maxAreaOfIsland(grid));
