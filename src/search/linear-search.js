function LinearSearch(searchElement, searchArray) {
  if (!Array.isArray(searchArray)) return -1;

  for (let i = 0; i <= searchArray.length; i++) {
    if (searchArray[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

module.exports = LinearSearch;
