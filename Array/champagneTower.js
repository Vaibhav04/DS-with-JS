var champagneTower = function (poured, query_row, query_glass) {
  const res = new Array(101).fill(0).map((val, i) => new Array(i + 1).fill(0));
  res[0][0] = poured;
  //   console.log(res[1].length);

  for (let i = 0; i <= query_row; i++) {
    for (let j = 0; j <= query_glass; j++) {
      let pending = (res[i][j] - 1.0) / 2;
      if (pending > 0) {
        res[i + 1][j] += pending;
        res[i + 1][j + 1] += pending;
      }
      if (j === query_glass) break;
    }
  }

  //   console.log(res);
  return Math.min(1, res[query_row][query_glass]);
};

console.log(champagneTower(100000009, 33, 17));
