const binarySearch = require("./binary-search");

describe("Output of binary search", () => {
  it("If 1st paramters or second parameter not array is not integer should return false", () => {
    expect(binarySearch("asd", null)).toEqual(-1);
  });
  
  it("If 2nd paramters is not array should return false", () => {
    expect(binarySearch(9, null)).toEqual(-1);
  });

  it(" [2, 3, 5, 20, 25, 50, 75, 100] search key 75 should return 6 ", () => {
    const arr = [2, 3, 5, 20, 25, 50, 75, 100];
    let key = 75;
    expect(binarySearch(key, arr)).toEqual(6);
  });
  it(" [2, 3, 5, 20, 25, 50, 75, 100] search key 75 should return -1 ", () => {
    const arr = [2, 3, 5, 20, 25, 50, 75, 100];
    let key = 101;
    expect(binarySearch(key, arr)).toEqual(-1);
  });
});
