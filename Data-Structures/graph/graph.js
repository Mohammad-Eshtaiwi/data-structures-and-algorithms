/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const Edge = require("./Edge");
const Vertex = require("./Vertex");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.size = 0;
  }
  addNode(vertex) {
    this.adjacencyList.set(vertex, []);
    this.size++;

    return vertex;
  }
  addEdge(startVertex, endVertex, weight = 0) {
    if (
      !this.adjacencyList.has(startVertex) ||
      !this.adjacencyList.has(endVertex)
    ) {
      throw new Error("Invalid Vertex!!!");
    }
    const list = this.adjacencyList.get(startVertex);
    list.push(new Edge(endVertex, weight));
    return list;
  }

  getNodes() {
    let nodes = [];
    for (const [vertex, edge] of this.adjacencyList.entries()) {
      if (vertex && edge) nodes[nodes.length] = [vertex, edge];
    }
    return nodes;
  }
  getNeighbors(node) {
    let neighbors = new Set();
    this.adjacencyList.forEach((item, key) => {
      for (let i = 0; i < item.length; i++) {
        if (item[i].vertex.value === node.value) {
          neighbors.add(key);
        }
      }
    });
    this.adjacencyList.get(node).forEach((item) => neighbors.add(item.vertex));

    return neighbors;
  }
  Size() {
    return this.size;
  }
}
// const graph = new Graph();

// const one = new Vertex(1);
// const six = new Vertex(6);
// const seven = new Vertex(7);
// const eight = new Vertex(8);
// const three = new Vertex(3);
// const two = new Vertex(2);

// console.log(graph.addNode(one));

// graph.addNode(six);
// graph.addNode(seven);
// graph.addNode(eight);
// graph.addNode(three);
// graph.addNode(two);

// graph.addEdge(one, six);

// graph.addEdge(one, seven);

// graph.addEdge(one, eight);

// graph.addEdge(one, three);

// graph.addEdge(one, two);

// graph.addEdge(six, seven);
// graph.addEdge(seven, eight);
// graph.addEdge(eight, three);
// console.log(graph.addEdge(three, two));
// graph.adjacencyList.forEach((item, key) => console.log(key, "=>", item));

// graph.getNodes();

// console.log(graph.getNeighbors(three));

module.exports = Graph;
