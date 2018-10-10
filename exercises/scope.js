// "use strict";
//
// var asim =1;
// window.moo =1;
// console.log(asim);
//
// console.log(window.asim);
//
// function other() {
//     var thing ={'hello':'other'};
//     console.log('other', thing)
//
// }
// other();





function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();