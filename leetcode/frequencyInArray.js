function countFrequencies(arr, frequencies ={}){
    if(arr.length === 0){
        return frequencies
    }

    const [first , ...rest] = arr

    frequencies[first] = (frequencies[first] || 0) + 1

    return countFrequencies(rest, frequencies)
}

const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frequencies = countFrequencies(array);
console.log("Frequencies:", frequencies);