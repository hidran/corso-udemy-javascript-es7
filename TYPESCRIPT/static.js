"use strict";
class MathCalc {
    static calcCirclePerimeter(r) {
        return 2 * MathCalc.PI * r;
    }
    calcEuroToDollar(euro) {
        return MathCalc.rate * euro;
    }
}
MathCalc.PI = 3.1459;
MathCalc.rate = 1.12;
let calc = new MathCalc();
console.log(MathCalc.PI);
console.log(MathCalc.calcCirclePerimeter(2));
// calc exchange rate
console.log('120 Euro are ' + calc.calcEuroToDollar(120) + ' Dollars');
