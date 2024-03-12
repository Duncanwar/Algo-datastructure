function isPalindrome(x: number): boolean {
    let num =x;
    let rem =0;
    while(num>0){
    rem = num%10
    num = Math.trunc(num/10)

    }
    return false
};