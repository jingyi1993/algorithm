// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
//
// function vowels(str) {
//     let string = str.toLowerCase();
//     let vowels= 0;
//     for(let char of string){
//         if(char === 'a'||char === 'e'||char === 'i'||char === 'o'||char === 'u'){
//             vowels++;
//         }
//     }
//     return vowels;
// }

function vowels (str){
    const arr = str.toLowerCase().match(/[aeiou]/gi);
    return  arr?arr.length:0;

}

module.exports = vowels;
