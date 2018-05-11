"use strict";
//class type
class MyLogger {
    log(msg) {
        console.log(msg);
    }
    generateId() {
        return Math.round(Math.random() * 1000000);
    }
}
class MyMailLogger {
    log() {
    }
    generateId() {
        return 1;
    }
}
let mailLog;
function logData(logger) {
    return logger.generateId();
}
mailLog = new MyMailLogger();
console.log(logData(mailLog));
