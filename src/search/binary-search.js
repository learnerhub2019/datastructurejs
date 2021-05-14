function binarySearch(key, arr) {
  if (!Array.isArray(arr)) return -1;

  let min = 0;
  let max = arr.length;

  while (min < max) {
    let guess = Math.floor((min + max) / 2);

    if (key == arr[guess]) {
      return guess;
    } else if (key < arr[guess]) {
      max = guess - 1;
    } else {
      min = guess + 1;
    }
  }
  return -1;
}

// const arr = [2, 3, 5, 20, 25, 50, 75, 100];
// const key = 75;
// binarySearch(key, arr);

module.exports = binarySearch;
