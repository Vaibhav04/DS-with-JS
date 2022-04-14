class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (this.adjacentList[node]) {
      return;
    }
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
      return;
    }
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  BFS(startingElem) {
    const queue = [startingElem];
    const seen = {};
    const values = [];
    seen[startingElem] = true;
    values.push(startingElem);

    while (queue.length > 0) {
      const currNode = queue.shift();
      console.log(currNode);

      for (const neighbour of this.adjacentList[currNode]) {
        console.log('Neightbour', neighbour);
        // console.log(seen[neighbour]);
        if (!seen[neighbour]) {
          // console.log('p');
          seen[neighbour] = true;
          queue.push(neighbour);
          values.push(neighbour);
        }
      }
      // console.log(queue);
    }
    return values;
  }

  DFS(node, seen = {}, values = []) {
    seen[node] = true;
    values.push(node);

    const neighbours = this.adjacentList[node];
    for (const neighbour of neighbours) {
      if (!seen[neighbour]) {
        this.DFS(neighbour, seen, values);
      }
    }
    return values;
  }
}

const graph = new Graph();
graph.addVertex('0');
graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addVertex('7');

graph.addEdge('3', '1');
graph.addEdge('3', '4');
graph.addEdge('4', '2');
graph.addEdge('4', '5');
graph.addEdge('1', '2');
graph.addEdge('1', '0');
graph.addEdge('0', '2');
graph.addEdge('6', '5');

console.log(graph);
console.log(graph.BFS('0'));
console.log(graph.DFS('0'));
