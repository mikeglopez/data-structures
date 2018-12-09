var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // TIME COMPLEXITY: O(1)
    var node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  };

  list.removeHead = function() {
    // TIME COMPLEXITY: O(1)
    var removed = this.head;

    this.head = this.head.next;

    return removed.value;
  };

  list.contains = function(target) {
    // TIME COMPLEXITY: O(n)
    var curr = this.head;

    while (curr) {
      if (curr.value === target) {
        return true;
      }
      curr = curr.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    .addToTail(): O(1)
    .removeHead(): O(1)
    .contains(): O(n)
 */
