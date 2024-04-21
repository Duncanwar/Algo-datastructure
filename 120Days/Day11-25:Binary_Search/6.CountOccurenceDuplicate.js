function countOccurrences(arr, target) {
    const findFirstOccurrence = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        let firstOccurrence = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                firstOccurrence = mid;
                right = mid - 1; // Continue search towards the left
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return firstOccurrence;
    };

    const findLastOccurrence = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        let lastOccurrence = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                lastOccurrence = mid;
                left = mid + 1; // Continue search towards the right
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return lastOccurrence;
    };

    const firstOccurrence = findFirstOccurrence(arr, target);
    const lastOccurrence = findLastOccurrence(arr, target);

    if (firstOccurrence === -1) {
        return 0; // Target not found
    }

    return lastOccurrence - firstOccurrence + 1;
}

// Example usage:
const arr = [1,2,3,3,3,4,5]
// [1, 2, 2, 2, 3, 4, 4, 4, 4, 5];
const target = 3;
console.log(countOccurrences(arr, target)); // Output: 4
