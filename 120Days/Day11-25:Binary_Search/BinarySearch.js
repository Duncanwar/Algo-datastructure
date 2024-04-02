function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = (left + (right - left)) >> 1;
    if (arr[middle] == x) {
      return middle;
    }
    if (arr[left] < x) {
      middle= left - 1;
    }
    else 
    middle= right -1
  }
  return -1
}

const result = binarySearch([1, 4, 7, 9, 10, 11], 1);
console.log(result);
