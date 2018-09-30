// --- Directions
// Given a string, !return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(arr) {
    // for(var i= 0; i<str.length/2; i++) {
    //     const  k =str[i];
    //     str[i] = str[str.length - i];
    //     str[str.length - i] = k;
    //
    // }
    //
    // return str

// solu 1;
//     let arr = str.split('')
//     .reverse()
//     .join('');
//
//     return arr;
//solu 2;
//     let reversed = '';
//      //iterate through
//     for(let char of str) {
//      reversed = char + reversed;
//     }

//solu 3;
    //string => array;
    //'abc' => [a,b,c];
    return arr.split('').reduce((reversed, char)=>{
       return char + reversed;
    }, '');





}

module.exports = reverse;
