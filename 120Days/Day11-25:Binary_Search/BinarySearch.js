function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let middle;

    while (left <= right) {
        middle = left + ((right - left) >> 1);
        if (arr[middle] === x) {
            return middle;
        }
        if (arr[middle] < x) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}

const result = binarySearch([1, 4, 7, 9, 10, 11], 7);
console.log(result);
