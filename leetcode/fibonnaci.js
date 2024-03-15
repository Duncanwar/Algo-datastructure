function fibonacci(n){
if(n <=1)
    return n;

return fibonacci(n-1) + fibonacci(n-2)
}

const n = 10; // Find the 10th Fibonacci number
const result = fibonacci(n);
console.log("The", n + "th Fibonacci number is:", result);