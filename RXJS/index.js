"use strict";
exports.__esModule = true;
var Rx = require("rxjs/Rx");
// 1, 3, 5 , 6 , 7
var observable = Rx.Observable.from([1, 3, 5, 6, 7]);
observable.subscribe(function (val) { return console.log(val); });
observable.subscribe(function (val) { return console.log('subscribe2 ' + val); }, function () { return console.log('error2'); }, function () { return console.log('complete2'); });
