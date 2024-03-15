function countAndFindFrequency(arr, index=0, frequencies ={}){
    if(index === arr.length){
        return frequencies
    }

    const element = arr[index];

    frequencies[element] = (frequencies[element] || 0) + 1

    return countAndFindFrequency(arr, index+1, frequencies)
}

function findHighestLowestFrequencyElement(frequencies, highest = true) {
    let resultElement = null;
    let targetFrequency = highest ? 0 : Infinity;
  
    for (const [element, frequency] of Object.entries(frequencies)) {
      if (highest ? frequency > targetFrequency : frequency < targetFrequency) {
        resultElement = element;
        targetFrequency = frequency;
      }
    }
  
    return resultElement;
  }
  
  // Example usage:
  const array = [6,6,6,6,6,6,1,1, 2, 2, 3, 3, 3, 4, 4, 4, 4,5];
  const frequencies = countAndFindFrequency(array);
  console.log("Frequencies:", frequencies);
  
  const highestFrequencyElement = findHighestLowestFrequencyElement(frequencies, true);
  console.log("Element with the highest frequency:", highestFrequencyElement);
  
  const lowestFrequencyElement = findHighestLowestFrequencyElement(frequencies, false);
  console.log("Element with the lowest frequency:", lowestFrequencyElement);
  