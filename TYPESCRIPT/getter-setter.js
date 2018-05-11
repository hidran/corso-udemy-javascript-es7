"use strict";
// setters & getters
class User {
    set name(name) {
        this._name = name.toUpperCase();
    }
    get name() {
        return this._name;
    }
}
let user = new User();
user.name = 'hidran';
console.log(user.name);
