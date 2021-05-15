function HashTable() {
  this.MAX = 100;
  this.arrHashData = Array.apply(null, { length: this.MAX });
}

HashTable.prototype.getHashCode = function (keyValue) {
  let hash = 0;
  const key = keyValue.toString();
  for (i = 0; i <= key.length - 1; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.MAX;
};

HashTable.prototype.addData = function (key, value) {
  const hashCode = this.getHashCode(key);
  this.arrHashData[hashCode] = value;
};

HashTable.prototype.getData = function (key) {
  const hashCode = this.getHashCode(key);
  return this.arrHashData[hashCode];
};

HashTable.prototype.deleteData = function (key) {
  const hashCode = this.getHashCode(key);
  this.arrHashData[hashCode] = undefined;
};
module.exports = HashTable;
