var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.front = 0;
  someInstance.rear = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.rear] = value;
  this.count++;
  this.rear++;
};

queueMethods.dequeue = function() {
  var temp = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  this.count--;
  return temp;
};

queueMethods.size = function() {
  return this.count >= 0 ? this.count : 0;
};
