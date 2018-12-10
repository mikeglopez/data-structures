

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // TIME COMPLEXITY: O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple = [k, v];

  if (bucket === undefined) {
    this._storage.set(index, [tuple]);
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      }
    }
    bucket.push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  // TIME COMPLEXITY: O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  // TIME COMPLEXITY: O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
    .insert(): O(1)
    .retrieve(): O(1)
    .remove(): O(1)
 */


