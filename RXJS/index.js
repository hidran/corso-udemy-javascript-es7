"use strict";
exports.__esModule = true;
// Observable: from, of dal pacchetto rxjs
var rxjs_1 = require("rxjs");
// 1, 3, 5 , 6 , 7
var observable = rxjs_1.from([1, 3, 5, 6, 7]);
observable.subscribe(function (val) { return console.log(val); });
observable.subscribe(function (val) { return console.log('subscribe2 ' + val); }, function () { return console.log('error2'); }, function () { return console.log('complete2'); });
