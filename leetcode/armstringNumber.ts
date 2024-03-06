
// An Armstrong number (also known as a narcissistic number or plenary number) is a
//  number that is equal to the sum of its own digits each raised to the power of the number of digits.
//  For example, 153 is an Armstrong number because:

// 1^3 + 5^3 + 3^3 = 153


function isArmstrongNumber(num:number):boolean{
    const numString:string = num.toString();
    const numDigits:number = numString.length;

    let sum:number =0;

    for(let digit of numString){
        const digitNum:number = parseInt(digit,10)
        sum += digitNum ** numDigits;
    }
    return sum === num;
}

