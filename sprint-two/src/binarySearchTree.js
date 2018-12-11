var BinarySearchTree = function(value) {
  var tree = Object.create(bstMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  // TIME COMPLEXITY: O(log n)
  if (this.value === null) {
    return;
  } else if (this.value === value) {
    return value;
  } else if (this.value <= value) {
    this.right === null ? this.right = BinarySearchTree(value) : this.right.insert(value);
  } else if (this.value >= value) {
    this.left === null ? this.left = BinarySearchTree(value) : this.left.insert(value);
  }
};

bstMethods.contains = function(target) {
  // TIME COMPLEXITY: O(log n)
  var result = false;

  if (this.value === target) {
    return true;
  } else if (this.value < target) {
    result = this.right !== null ? this.right.contains(target) : false;
  } else {
    result = this.left !== null ? this.left.contains(target) : false;
  }
  return result;
};

bstMethods.depthFirstLog = function(cb) {
  // TIME COMPLEXITY: O(log n)
  cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   .insert(): O(log n)
   .contains(): O(log n)
   .depthFirstLog(): O(log n)
 */
