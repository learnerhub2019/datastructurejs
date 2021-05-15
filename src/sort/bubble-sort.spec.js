const bubbleSort = require("./bubble-sort");

describe("Bubble Sort", () => {
  const unSortedArray = [20, 6, 8, 3, 78, 21, 18];
  const sortedArray = [3, 6, 8, 18, 20, 21, 78];
  it("check buuble sort output", () => {
    expect(bubbleSort(unSortedArray)).toEqual(sortedArray);
  });
});
