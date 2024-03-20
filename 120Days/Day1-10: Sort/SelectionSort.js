function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length - i - 1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

const sort= selectionSort([34,6,11,9,3,100,20,2,5,4,1,15,7,])
console.log("Selection sort",sort)