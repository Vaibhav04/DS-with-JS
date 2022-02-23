class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _createHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) *i) %this.data.length;
    }

    return hash
  }

  set(key, value) {
    let hash = this._createHash(key)
    if(!this.data[hash]) {
      this.data[hash] = []
    } 
    this.data[hash].push([key, value])
  }

  get(key) {
    let hash = this._createHash(key);

    // Get memory block, if it has more than 1 item due to collision the traverse and return the value with given key.
    let data = this.data[hash]
    for (let i = 0; i < data.length; i++) {
      if(data[i][0] === key) return data[i][1]
    }
  }

  getKeys() {
    const keys =[]

    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i].length === 1) {
        keys.push(this.data[0][0][0])
      } else {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0])
        }
      }
    }
    return keys
  }

  getValues() {
    const values =[]

    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i].length === 1) {
        values.push(this.data[0][0][1])
      } else {
        for (let j = 0; j < this.data[i].length; j++) {
          values.push(this.data[i][j][1])
        }
      }
    }
    return values
  }
}

const hash = new HashTable(2)

hash.set('grapes', 1000)
hash.set('apple', 100)
hash.set('peanuts', 10)

// console.log(hash.get('grapes'))
// console.log(hash.get('apple'))
// console.log(hash.get('peanuts'))

console.log(...hash.getKeys())
console.log(...hash.getValues())


// console.log(...hash.data)