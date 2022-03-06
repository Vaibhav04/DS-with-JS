var countOrders = function (n) {
  let ans = 1;
  let MOD = 1000000007;

  for (let i = 1; i <= n; ++i) {
    ans = ans * i;
    ans = ans * (2 * i - 1);
    ans %= MOD;
  }

  return ans;
};
