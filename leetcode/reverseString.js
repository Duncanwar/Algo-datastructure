function reverseString(str){
    if(str.length<=1)
     return str

    return str.slice(-1)+reverseString(str.slice(0,-1))
}

const originalString = "hello";
const reversedString = reverseString(originalString);
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);