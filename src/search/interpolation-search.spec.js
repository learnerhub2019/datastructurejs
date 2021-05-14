const interpolationSearch = require("./interpolation-search");

describe("Output of Interpolation search", () => {
  it("If 1st paramters or second parameter not array is not integer should return false", () => {
    expect(interpolationSearch("asd", null)).toEqual(-1);
  });

  it("If 2nd paramters is not array should return false", () => {
    expect(interpolationSearch(9, null)).toEqual(-1);
  });

  it(" [2, 3, 5, 20, 25, 50, 75, 100] search key 75 should return 6 ", () => {
    const arr = [2, 3, 5, 20, 25, 50, 75, 100];
    let key = 75;
    expect(interpolationSearch(key, arr)).toEqual(6);
  });

  it(" [2, 3, 5, 20, 25, 50, 75, 100] search key 75 should return -1 ", () => {
    const arr = [2, 3, 5, 20, 25, 50, 75, 100];
    let key = 101;
    expect(interpolationSearch(key, arr)).toEqual(-1);
  });
});
