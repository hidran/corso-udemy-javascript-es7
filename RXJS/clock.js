"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs/Rx");
var timer = Rx.Observable.timer(1000, 1000);
timer.subscribe(function (val) { return console.log(val); });
