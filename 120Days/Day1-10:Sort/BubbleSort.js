function bubbleSort(arr){
    const n = arr.length
    for(let i = 0; i < n-1; i++){
        let swapped = false;
        for(let j = 0; j < n-i-1; j++){
            if(arr[j]> arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapped = true
            }
        }
        if(!swapped) break;
    }
    return arr
}


const sort= bubbleSort([34,6,11,9,3,100,20,2,5,4,1,15,7])
console.log("Bubble sort",sort)