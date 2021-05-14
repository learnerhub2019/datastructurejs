const LinearSearch = require("./linear-search");

describe("Linear Search Result", () => {
  it("It should return position of search element in array", () => {
    const searchElement = -2;
    const searchInArray = [5, 6, 102, -2, 44, 6];
    expect(LinearSearch(searchElement, searchInArray)).toEqual(3);
  });
});
