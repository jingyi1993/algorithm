// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for(let i =1; i<= n ; i++){
        let steps= '';
        for(let j=1; j<=2*n-1; j++){
            if(j<n-(i-1)||j>n+(i-1)){
                steps+=" ";
            }else{
                steps+= '#';
            }
        }
        console.log(steps);
    }

}

module.exports = pyramid;
