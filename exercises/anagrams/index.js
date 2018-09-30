// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const charMapa = buildCharMap(stringA);
//     const charMapb = buildCharMap(stringB);
//     if(Object.keys(charMapa).length !== Object.keys(charMapb).length){
//         return false
//     }
//
//     for(let char in charMapa){
//         if (charMapa[char]!== charMapb[char]){
//             return false
//         }
//
//     }
//     return true;
//
//
// }
//
// function buildCharMap(str){
//     const charMap = {};
//     const cleanedString = str.replace(/[^\w]/g, '').toLowerCase();
//     console.log('!!!',cleanedString);
//
//     for (let char of cleanedString){
//         if(!charMap[char]){
//             charMap[char]=1;
//         }else{
//             charMap[char]++;
//         }
//
//         //donnot forget return !!!
//
//
//     }
//     return charMap;
// }
function anagrams(stringA, stringB){
    //sort() is used to array
    let cleanedStringa = regExp(stringA).split('').sort().join('');
    let cleanedStringb = regExp(stringB).split('').sort().join('');

    if(cleanedStringa!== cleanedStringb){
        return  false;
    }else {
        return true;
    }



}
function regExp(str){
     let cleanedString = str.replace(/[^\w]/g,'').toLowerCase();
     return cleanedString;

}

module.exports = anagrams;
