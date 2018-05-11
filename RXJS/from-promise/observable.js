const albumUrl = 'https://jsonplaceholder.typicode.com/albums';
let ul = document.querySelector('#albums');
let total = document.querySelector('#total');
const p = fetch(albumUrl).then( res => res.json());
console.log(p)
total.innerHTML = 0 ;

let obs = Rx.Observable.fromPromise(p);
obs.subscribe(createList)

