"use strict";
function showUser(user) {
    console.log(user.firstname + ' ,' + user.lastname);
}
function showUser2(user) {
    console.log(user.firstname + ' ,' + user.lastname);
}
showUser({ lastname: 'Arias', firstname: 'Hidran' });
showUser2({ lastname: 'Arias', firstname: 'Hidran' });
function showUser3(user) {
    console.log(user.firstname + ' ,' + user.lastname);
}
showUser3({ lastname: 'Arias', firstname: 'Hidran' });
function showUser4(user) {
    console.log('showuser 4= ' + user.firstname + ' ,' + user.lastname + ' ,' + user.age);
}
showUser4({ lastname: 'Arias', firstname: 'Hidran', age: 45, title: 'Engineer' });
