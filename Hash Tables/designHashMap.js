// Design a HashMap without using any built-in hash table libraries.
// Implement the MyHashMap class:
// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

// Example 1:
// Input
// ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
// [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
// Output
// [null, null, null, 1, -1, null, 1, null, -1]
// Explanation
// MyHashMap myHashMap = new MyHashMap();
// myHashMap.put(1, 1); // The map is now [[1,1]]
// myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
// myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
// myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
// myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
// myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
// myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
// myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]

var MyHashMap = function () {
  this.map = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.map[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return this.map[key] >= 0 ? this.map[key] : -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.map[key];
};

const inputArr = [
  'MyHashMap',
  'remove',
  'put',
  'put',
  'put',
  'put',
  'put',
  'put',
  'get',
  'put',
  'put',
];
const values = [
  [],
  [2],
  [3, 11],
  [4, 13],
  [15, 6],
  [6, 15],
  [8, 8],
  [11, 0],
  [11],
  [1, 10],
  [12, 14],
];

for (let i = 0; i < inputArr.length; i++) {
  const input = inputArr[i];
  const keyValPair = values[i];
  console.log(input, keyValPair);
  switch (input) {
    case 'MyHashMap':
      var obj = new MyHashMap();
      break;
    case 'put':
      obj.put(keyValPair[0], keyValPair[1]);
      break;
    case 'get':
      console.log(obj.get(keyValPair[0]));
      break;
    case 'remove':
      obj.remove(keyValPair[0]);
      break;

    default:
      break;
  }
  console.log(obj);
}
// var obj = new MyHashMap();
// obj.put(1, 1);
// var param_2 = obj.get(1);
// console.log(param_2);
// obj.remove(1);
