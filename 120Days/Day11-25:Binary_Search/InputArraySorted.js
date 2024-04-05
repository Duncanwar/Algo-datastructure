function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
    return true;
  }
}
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 4, 3, 2, 1];

console.log("Sorted",isSorted(sortedArray)); // Output: true
console.log("Unsorted",isSorted(unsortedArray));