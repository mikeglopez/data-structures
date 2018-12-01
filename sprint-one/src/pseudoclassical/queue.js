var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.front = 0;
  this.rear = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.rear] = value;
  this.rear++;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var temp = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  this.count--;
  return temp;
};

Queue.prototype.size = function() {
  return this.count >= 0 ? this.count : 0;
};