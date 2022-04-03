// TODO (Do it again to improve complexity)
var findWinners = function (matches) {
  const looserData = {};
  const winnerData = {};

  for (let i = 0; i < matches.length; i++) {
    const winner = matches[i][0];
    const looser = matches[i][1];
    if (!looserData[looser]) looserData[looser] = 1;
    else looserData[looser]++;

    if (!winnerData[winner]) winnerData[winner] = 1;
    else winnerData[winner]++;
  }
  console.log(winnerData, looserData);

  const res = [[], []];
  for (const key in winnerData) {
    if (!looserData[key]) {
      res[0].push(key);
    }
  }
  for (const key in looserData) {
    if (looserData[key] === 1) {
      res[1].push(key);
    }
  }
  console.log(res);
  return res;
};
const matches = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
];
console.log(findWinners(matches));
