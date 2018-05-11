const albumUrl = 'https://jsonplaceholder.typicode.com/albums';
let ul = document.querySelector('#albums');
let total = document.querySelector('#total');
const p = fetch(albumUrl).then( res => res.json());

total.innerHTML = 0 ;

let obs = Rx.Observable.fromPromise(p);
// --- [{},{},{}]
obs.subscribe(res => setCount(res.length) );

obs.switchMap(res => Rx.Observable.of(...res) )
// ---{title:'title', id:1},---- {title:'title2', id:2}---{}---|
    .map( res => res.title)  
 .subscribe(createLisItem)