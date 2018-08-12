const albumUrl = 'https://jsonplaceholder.typicode.com/albums';
let ul = document.querySelector('#albums');
let total = document.querySelector('#total');
const p = fetch(albumUrl).then( res => res.json());

total.innerHTML = 0 ;
  const {from, of } = rxjs;
  const { switchMap, map} = rxjs.operators;


let obs = from(p);
// --- [{},{},{}]
obs.subscribe(res => setCount(res.length) );

// ---{title:'title', id:1},---- {title:'title2', id:2}---{}---|
obs.pipe(
    switchMap(res => of(...res) )

   , map( res => res.title)

).subscribe(createLisItem)

