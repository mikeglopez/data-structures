var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var front = 0;
  var rear = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[rear] = value;
    rear++;
    size++;
  };

  someInstance.dequeue = function() {
    var temp = storage[front];
    delete storage[front];
    front++;
    size--;
    return temp;
  };

  someInstance.size = function() {
    return size >= 0 ? size : 0;
  };

  return someInstance;
};
