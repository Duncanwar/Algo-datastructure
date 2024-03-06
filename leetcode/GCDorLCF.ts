// Certainly! 
// Here's how you can implement the Euclidean Algorithm to find the Greatest Common Divisor (GCD) or Highest Common Factor (HCF) of two numbers in JavaScript:

function gcd(a,b){
    // Ensure a is always greater than or equal to b
    while(b!==0){
        let temp = b;
        b= a%b;
        a=temp;
    }
    return a;
}

// Test the function
const num1 = 48;
const num2 = 18;
console.log(`GCD(${num1}, ${num2}) = ${gcd(num1, num2)}`);