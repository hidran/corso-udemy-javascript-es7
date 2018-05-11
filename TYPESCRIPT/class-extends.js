"use strict";
// classes
class AnimalBase {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log('I am moving ' + distance + ' Meters');
    }
    getName() {
        return 'my name is ' + this.name;
    }
}
class Birds extends AnimalBase {
    constructor(name, place = 'SEA') {
        super(name);
        this.place = place;
    }
    getPlace() {
        return this.place;
    }
    setPlace(place) {
        this.place = place;
    }
    move(distance) {
        console.log('I am flying  ' + distance + ' high');
    }
}
let dove = new Birds('Dove', 'OCEAN');
dove.move(50);
console.log(dove.getName());
console.log(dove.getPlace());
