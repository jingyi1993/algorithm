// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     const words =[];
//     //['a','short','sentence'];
//     let arr = str.split(" ");
//     //['A','Short','Sentence'];
//     for(let char of arr){
//         words.push(char[0].toUpperCase()+char.slice(1));
//     };
//
//     console.log(words);
//
//     return words.join(" ");
//
//
// }

function capitalize(str){
    let string ="";
    string += str[0].toUpperCase();
    for(let index = 1; index < str.length; index++){
        if(str[index-1]===" "){
            string += str[index].toUpperCase();
        }else{
            string+= str[index]
        }
    }
    return string;
}

module.exports = capitalize;
