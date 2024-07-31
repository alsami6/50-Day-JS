//  +++++   Hash Tag Generator



// ?Q : You are reqired to implement a function generator that generates a hash tag from a given input  
//      string. The hash tag should be constructed as follows:

// ? The input string should be converted to a hash format, where each word is canpitalized and concatenated
//   together without spaces.

// ? If the length of the inpput string is greater than 280 characters of if the input string is empty or 
//   contains only whitespace, the funcation should return false.

// ? Otherwise, the function should return the generated hash tag prefixed with #.


// * Write a function generateHash to accomplish this task.




const generateHash = (str) => {
    if(str.length > 280 || str.trim().length === 0 ){
        return flase;
    }

    str = str.split(" ");
    str = str.map((curElem) => curElem.replace(curElem[0], curElem[0].toUpperCase()))
    str = `#${str.join("")}`
    return str;
}


console.log(generateHash("my name is al sami"));