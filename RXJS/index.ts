// Observable: from, of dal pacchetto rxjs
import { from }  from 'rxjs'
// 1, 3, 5 , 6 , 7
let observable = from([1,3,5,6,7]);

observable.subscribe((val: number) => console.log(val))

observable.subscribe((val: number) => console.log('subscribe2 '+val),
    () => console.log('error2'),
    () => console.log('complete2')
    )