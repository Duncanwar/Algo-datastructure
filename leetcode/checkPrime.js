function isPrime(num){
    let count=1
    if(num===1) return false
    for(let i=2; i<=num; i++){
        if(num%i===0){
            count++
        }
    }
    return count === 2
}

console.log(isPrime(15))
console.log(isPrime(17))