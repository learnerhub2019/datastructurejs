const HashTable = require("./hash-table");

describe("Output of binary search", () => {
  let key = "xyz";
  let value = 12;
  let key2 = "xyz1";
  let value2 = 121;
  let testHash = new HashTable();
  let hashCodeValue = testHash.getHashCode(key);

  it("Check hash function", () => {
    expect(testHash.getHashCode(key)).toEqual(63);
  });

  testHash.addData(key, value);
  testHash.addData(key2, value2);
  it("check added value in hashTable", () => {
    expect(testHash.arrHashData).toContain(value);
    expect(value).toEqual(testHash.arrHashData[hashCodeValue]);
    expect(value).toEqual(testHash.getData(key));
  });

  testHash.deleteData(key2);
  it("check added value in hashTable", () => {
    expect(testHash.getData(key2)).toBeUndefined();
  });
});
