// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let array =[0,1];
//     let pointer = 2;
//     while(pointer<=n){
//         let newElement = array[pointer-2] + array[pointer-1];
//         array.push(newElement);
//         pointer ++;
//     }
//     return array[n];
// }
function memoize (fn) {
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] =result;
        console.log(cache);

        return result;

    }
}
function fibs (n) {
    if(n<2){
        return n;
    }
    return fibs(n-1) + fibs(n-2)
}

let fib = memoize(fibs);

module.exports = fib;
