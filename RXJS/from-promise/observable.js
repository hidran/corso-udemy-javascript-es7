const albumUrl = 'https://jsonplaceholder.typicode.com/albums';
let ul = document.querySelector('#albums');
let total = document.querySelector('#total');
const p = fetch(albumUrl).then( res => res.json());
console.log(p)
total.innerHTML = 0 ;
const {from } = rxjs
let obs = from(p);
obs.subscribe(createList)

