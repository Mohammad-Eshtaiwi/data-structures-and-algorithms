/* eslint-disable quotes */
const Graph = require("./graph");
const Vertex = require("./Vertex");

const graph = new Graph();

const one = new Vertex(1);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const three = new Vertex(3);
const two = new Vertex(2);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(eight);
graph.addNode(three);
graph.addNode(two);

const nodeOne = graph.addNode(one);

graph.addEdge(one, six);

graph.addEdge(one, seven);

graph.addEdge(one, eight);

graph.addEdge(one, three);

graph.addEdge(one, two);

graph.addEdge(six, seven);
graph.addEdge(seven, eight);
graph.addEdge(eight, three);
let threeTwoEdge = graph.addEdge(three, two);

describe("Graph", () => {
  it("should add a new node", () => {
    expect(nodeOne).toEqual(one);
  });
  it("should add a new edgae", () => {
    // console.log(graph.addEdge(three, two).length);
    expect(threeTwoEdge.length).toEqual(1);
  });
  it("should return all nodes", () => {
    expect(graph.getNodes().length).toEqual(6);
  });
  it("should return all connected nodes nodes", () => {
    expect(graph.getNeighbors(three).size).toEqual(3);
  });
});
