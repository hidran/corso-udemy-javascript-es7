"use strict";
// any, void, null, undefined , never
let age = 45;
age = '45';
age = [];
let userData = [45, 'Hidran', 'Arias', { address: 'Torino' }];
userData = ['444', [], {}];
// void
let myAge;
function printName() {
    console.log('error');
}
function returnNever() {
    throw new Error('No values defined');
}
returnNever();
