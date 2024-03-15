function isPalindrome(str){
    if(str.length <=1)
        return true;

    if(str[0] === str[str.length-1]){
        return isPalindrome(str.slice(1,-1))
    }
    else 
     return false;
}


const palindromeString = "racecar";
console.log("Is", palindromeString, "a palindrome?", isPalindrome(palindromeString));

const nonPalindromeString = "hello";
console.log("Is", nonPalindromeString, "a palindrome?", isPalindrome(nonPalindromeString));
