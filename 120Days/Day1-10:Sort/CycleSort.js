function cycleSort(arr) {
  const n = arr.length;

  for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    let item = arr[cycleStart];

    //Find the positon where we put the item
    let pos = cycleStart;
    for (let i = cycleStart + 1; i < n; i++) {
      if (arr[i] < item) {
        pos++;
      }
    }
    // If item is already in the correct position, move to next item
    if (pos === cycleStart) {
      continue;
    }
    //Otherwise, put the item in the correct position
    while (item === arr[pos]) {
      pos++;
    }
    [arr[pos], item] = [item, arr[pos]];
    //Rotate the remaining elements to put the item in the correct position
    while (pos !== cycleStart) {
      pos = cycleStart;
      for (let i = cycleStart + 1; i < n; i++) {
        if (arr[i] < item) {
          pos++;
        }
      }
      while (item === arr[pos]) {
        pos++;
      }
      [arr[pos], item] = [item, arr[pos]];
    }
  }
  return arr;
}

// Example usage:
const array = [5, 3, 2, 1, 4];
const sortedArray = cycleSort(array);
console.log("Sorted array:", sortedArray);
