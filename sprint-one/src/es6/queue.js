class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.storage[this.rear] = value;
    this.rear++;
    this.count++;
  }

  dequeue() {
    var temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    this.count--;
    return temp;
  }

  size() {
    return this.count >= 0 ? this.count : 0;
  }
}