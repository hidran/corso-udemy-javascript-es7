const albumUrl = 'https://jsonplaceholder.typicode.com/albums';

const p = fetch(albumUrl).then( res => res.json());

total.innerHTML = 0 ;
const searchBox = document.getElementById('search');

const typeahead = Rx.Observable.fromEvent(searchBox, 'input')
        .map(e => e.target.value)
        . filter(text => text.length > 2)
        .debounceTime(10)
        .distinctUntilChanged()
        .switchMap(val => {
        return Rx.Observable.fromPromise(p)


            .switchMap(res => Rx.Observable.of(...res) )
            
        // ---{title:'title', id:1},---- {title:'title2', id:2}---{}---|
            .map( res => res.title)
                .filter(title => title.indexOf(val) > -1 )
          
      
    } )
typeahead.subscribe(res => console.log(res))