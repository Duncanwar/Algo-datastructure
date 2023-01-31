// ideal optimised way in this case scenario
/**
 * Find missing numbers in a given array and return an array of the missing numbers
 * 
 */
function missingNumbers(arr) {
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);
  let set = new Set(arr);
  let newArray=[];
  for (let i = minValue; i < maxValue; i++){
    if (!set.has(i)) {
      newArray.push(i)
    }
  }
  return newArray;
}

missingNumbers([12,45,5,9,10])