"use strict";
//ENUM TYPE
//MON, TUE, WED, THU, FRI, SAT, SUN
var DAYS;
(function (DAYS) {
    DAYS[DAYS["MON"] = 1] = "MON";
    DAYS[DAYS["TUE"] = 2] = "TUE";
    DAYS[DAYS["WED"] = 3] = "WED";
    DAYS[DAYS["THU"] = 4] = "THU";
    DAYS[DAYS["FRI"] = 5] = "FRI";
    DAYS[DAYS["SAT"] = 6] = "SAT";
    DAYS[DAYS["SUN"] = 7] = "SUN";
})(DAYS || (DAYS = {}));
function isWorkingDay(day) {
    if (day === 7 /* SUN */ || day === 6 /* SAT */) {
        return true;
    }
    return false;
}
(function (DAYS) {
    DAYS[DAYS["LAA"] = 8] = "LAA";
    DAYS[DAYS["NAA"] = 9] = "NAA";
})(DAYS || (DAYS = {}));
//console.log(isWorkingDay(DAYS.SUN))
//console.log(isWorkingDay(3))
const myDay = 8;
//console.log(isWorkingDay(999))
//console.log(DAYS[1])
