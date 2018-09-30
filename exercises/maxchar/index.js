// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const Obj = {};
    let max = 0;
    let maxChar = '';
    for(let char of str){
        if(!Obj[char]){
            Obj[char] = 1;
        }else{
            Obj[char]++;
        }
    }

    for(let char in Obj){
        if(Obj[char]>max){
            max = Obj[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
