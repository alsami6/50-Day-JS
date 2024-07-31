// ? Q: Write a function findLongestWord that takes a input a returns the longest word in the string.
//      If there are multiple longest words, return the one encountered.


// * Constraints:
// ? The input string may contain alphabetic chracters, digits, spaces, and punctuation.
// ? The input string is non-empty
// ? The input string may contain multiple words separated by spaces.

// * Note:
// ? If the input string is empty or contains only whitespace, the function should return an false.
// ? The function should ingnore leading and trailing and whitespace when determining the longest word.


const findLongestWord = (str) =>{
    if (str.trim().length === 0){
    return false;
    }

    strArr = str.split(" ");
    strArr = strArr.sort((a, b) => b.length - a.length);
    console.log(strArr);
    return strArr[0];
} 


console.log(
    findLongestWord("Watch Sami Technical javaScript course on youtube")
);