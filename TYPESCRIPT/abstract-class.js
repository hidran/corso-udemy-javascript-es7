"use strict";
//ABSTRACT CLASSES
class Logger {
    generateId() {
        return Math.round(Math.random() * 1000000);
    }
}
class ConsoleLogger extends Logger {
    constructor() {
        super(...arguments);
        this.msg = '';
        this.id = 0;
    }
    log(msg) {
        console.log(msg);
    }
    getMsg() {
        return this.msg;
    }
}
let Clog = new ConsoleLogger();
Clog.log('Logging to console');
console.log(Clog.generateId());
