"use strict";
class Car {
    constructor(version, name, model, year, color) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.version = '1.1';
        this.version = version;
    }
    setVersion(version) {
        //this.version = version
    }
    getVersion() {
        return this.version;
    }
    getColor() {
        return this.color;
    }
}
let car = new Car('2.1', 'Fiat 500', '500C', '2016', 'red');
//car.version = '111'
console.log(car.getColor());
