function quickSort(arr) {
    if(arr.length<=1){
        return arr
    }
  // Select a pivot element (for simplicity we choose the last element)
  const pivot = arr[arr.length -1];
  console.log(pivot)
  const leftArr =[]
  const rightArr = []

  // Partition the array into two subarrays
  for (let i=0; i<arr.length -1; i++) {
    if(arr[i]<pivot){
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  // Recursively sort the subarrays and concatenate them with the pivot
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const array = [12,11,13,5,6,7,14]
const sortedArray = quickSort(array)
console.log("Sorted array: " + sortedArray)
