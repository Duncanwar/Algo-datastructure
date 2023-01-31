// ideal optimised way in this case scenario
/**
 * Find missing numbers in a given array and return an array of the missing numbers
 *
 */
function missingNumbers(arr) {
    var maxValue = Math.max.apply(Math, arr);
    var minValue = Math.min.apply(Math, arr);
    var set = new Set(arr);
    var newArray = [];
    for (var i = minValue; i < maxValue; i++) {
        if (!set.has(i)) {
            newArray.push(i);
        }
    }
    return newArray;
}
missingNumbers([12, 45, 5, 9, 10]);
