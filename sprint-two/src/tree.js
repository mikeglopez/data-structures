var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // an array containing a number of subtrees
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// takes any value, sets that as the target of a node,
// and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  // TIME COMPLEXITY: O(1)
  var child = new Tree(value);
  this.children.push(child);
};

// takes any input and returns a boolean reflecting whether it can be
// found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  // TIME COMPLEXITY: O(n)
  var isFound = false;

  var lookUp = function(child) {
    for (var i = 0; i < child.length; i++) {
      if (child[i].value === target) {
        isFound = true;
      }
      lookUp(child[i].children);
    }
  };

  lookUp(this.children);

  return isFound;
};



/*
 * Complexity: What )is the time complexity of the above functions?
    .addChild(): O(1)
    .contains(): O(n)
 */
