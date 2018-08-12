"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rx = require("rxjs/Rx");
let timer = Rx.Observable.timer(1000, 1000);
timer.subscribe(val => console.log(val));
