import * as Rx from 'rxjs/Rx';

let timer = Rx.Observable.timer(1000,1000);
timer.subscribe(val => console.log(val))