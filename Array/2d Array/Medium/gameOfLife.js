// TODO Code it again ...
// Eight neighbors (horizontal, vertical, diagonal)
const neighbors = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

// If the point is out of the board then don't need to check it
const isInRange = (x, y, m, n) => x >= 0 && x < m && y >= 0 && y < n;

const countLiveNeighbors = (board, x, y, m, n) => {
  let liveNeighbors = 0;
  for (let [addX, addY] of neighbors) {
    const neighborX = x + addX;
    const neighborY = y + addY;

    // We only need to care about live neighbors
    // Check if the neighbor is in the board and live ( represented by a 1 )
    if (isInRange(neighborX, neighborY, m, n) && board[neighborX][neighborY]) {
      liveNeighbors++;
    }
  }

  return liveNeighbors;
};

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = (board) => {
  const m = board.length;
  const n = board[0].length;
  const tempBoard = JSON.parse(JSON.stringify(board));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const liveNeighbors = countLiveNeighbors(tempBoard, i, j, m, n);

      // Board is only changed in below cases
      // A dead cell ( represented by a 0 ) has exactly 3 live neighbors
      // A live cell ( represented by a 0 ) has less than 2 live neighbors or more than 3 live neighbors

      if (!tempBoard[i][j]) {
        if (liveNeighbors === 3) {
          board[i][j] = 1;
        }
      } else {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          board[i][j] = 0;
        }
      }
    }
  }
};
