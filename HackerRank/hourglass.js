'use strict';
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    const arr = inputString.map(row => row.split(' ').map(Number));

    const result = hourglassSum(arr);

    fs.writeFileSync(process.env.OUTPUT_PATH, result);
});

/**
 * Returns the maximum hourglass sum in a 2D array.
 * @param {number[][]} arr - The 2D array.
 * @return {number} The maximum hourglass sum.
 */
function hourglassSum(arr) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            const sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
                + arr[i + 1][j + 1]
                + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}
