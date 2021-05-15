/**
 *  Bubble Sort Algoritham
 */

function bubbleSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

module.exports = bubbleSort;
