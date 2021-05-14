/** 
Interpolation search is an improved variant of binary search. 
This search algorithm works on the probing position of the required value.
 For this algorithm to work properly, 
 the data collection should be in a sorted form and equally distributed.
 */

function interpolationSearch(key, arr) {
  // console.log(`---Interpolation Search-----`);
  if (!Array.isArray(arr)) return -1;

  let min = 0;
  let max = arr.length - 1;

  while (min < max && key <= arr[max] && key >= arr[min]) {
    // console.log(`Max is ${max} & Min is${min}`);
    let guess =
      min +
      Math.round(((key - arr[min]) * (max - min)) / (arr[max] - arr[min]));
    // console.log(
    //   `guess is: ${guess} => ${arr[guess]} and search value is: ${key}`
    // );
    if (key == arr[guess]) {
      return guess;
    } else if (key < arr[guess]) {
      max = guess - 1;
    } else {
      min = guess + 1;
    }
    // console.log(`Max to be ${max} & Min to be${min}`);
  }
  return -1;
}

module.exports = interpolationSearch;
