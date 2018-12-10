

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // TIME COMPLEXITY: O(1)
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // TIME COMPLEXITY: O(n)
  for (var key in this.nodes) {
    if (Number([key]) === node) {
      return true;
    }
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // TIME COMPLEXITY: O(n)
  for (var key in this.nodes) {
    if (Number(this.nodes[key]) === node) {
      this.removeEdge(node, key);
    }
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // TIME COMPLEXITY: O(n)
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // TIME COMPLEXITY: O(1)
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // TIME COMPLEXITY: O(1)
  var index = this.nodes[toNode].indexOf(fromNode);
  this.nodes[toNode][index] = null;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // TIME COMPLEXITY: O(n)
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    .addNode(): O(1)
    .contains(): O(n)
    .removeNode(): O(n)
    .hasEdge(): O(n)
    .addEdge(): O(1)
    .removeEdge(): O(1)
    .forEachNode(): O(n)
 */


