"use strict";
// typed functions
function myFunction() {
}
let myFunc = function () {
};
myFunc();
let myArrowFunc = (e) => { console.log(e); };
myArrowFunc('hidran');
let myArrowFunc2 = (e) => e * 2;
console.log(myArrowFunc2(2));
function func(x, y) {
    console.log('I am func');
}
let myFunc2;
myFunc2 = func;
myFunc2('ts', 4);
myFunc2 = function (name, age) {
    console.log(name + '  is  ' + age + ' years old');
};
myFunc2('Hidran', 45);
