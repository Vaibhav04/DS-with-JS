// You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
// The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.
// Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

// Example 1:
// Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// Output: 20
// Explanation:
// We can connect the points as shown above to get the minimum cost of 20.
// Notice that there is a unique path between every pair of points.

// Example 2:
// Input: points = [[3,12],[-2,5],[-4,1]]
// Output: 18

// Resources
//  1. https://www.youtube.com/watch?v=eTaWFhPXPz4.
//  2. https://techdose.co.in/kruskals-algorithm/
//  3. https://www.youtube.com/watch?v=kaBX2s3pYO4

class UnionFind {
  constructor(size) {
    this.group = new Array(size).fill(0);
    this.rank = new Array(size).fill(0);

    for (let i = 0; i < this.group.length; i++) {
      this.group[i] = i;
    }
  }

  //   Finding and storing the absolute root for a point
  find(point) {
    if (this.group[point] !== point) {
      this.group[point] = this.find(this.group[point]);
    }
    return this.group[point];
  }

  union(firstPoint, secondPoint) {
    let firstPointGroup = this.find(firstPoint);
    let secondPointGroup = this.find(secondPoint);

    // Both points belong to same group, joining them will create cycle
    if (firstPointGroup === secondPointGroup) {
      return false;
    }

    // If first point group is big, then absolute root of second group will point to absolute root of first point group
    // Vice versa for second case.
    if (this.rank[firstPointGroup] > this.rank[secondPointGroup]) {
      this.group[secondPointGroup] = firstPointGroup;
    } else if (this.rank[secondPointGroup] > this.rank[firstPointGroup]) {
      this.group[firstPointGroup] = secondPointGroup;
    } else {
      // If they both are same then the rank of either of the group will be increase by 1
      this.group[firstPointGroup] = secondPointGroup;
      this.rank[secondPointGroup] += 1;
    }
    return true;
  }
}

var minCostConnectPoints = function (points) {
  const weights = [];
  //   Store all weights
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let weight =
        Math.abs(points[i][0] - points[j][0]) +
        Math.abs(points[i][1] - points[j][1]);
      weights.push([weight, i, j]);
    }
  }
  //   Sort weights so that we pick the min weight first
  weights.sort((a, b) => a[0] - b[0]);

  let uf = new UnionFind(points.length);
  let usedEdges = 0;
  let cost = 0;
  let i = 0;
  for (i = 0; i < weights.length && usedEdges < points.length - 1; i++) {
    const [weight, firstPoint, secondPoint] = weights[i];
    // If points can be joined
    if (uf.union(firstPoint, secondPoint)) {
      cost += weight;
      usedEdges += 1;
    }
  }
  return cost;
};

const points = [
  [-8, 14],
  [16, -18],
  [-19, -13],
  [-18, 19],
  [20, 20],
  [13, -20],
  [-15, 9],
  [-4, -8],
];
console.log(minCostConnectPoints(points));
