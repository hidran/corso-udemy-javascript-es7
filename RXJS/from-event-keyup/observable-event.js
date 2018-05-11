const albumUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';

const p = fetch(albumUrl).then(res => res.json());
const objs = Rx.Observable;

objs.fromPromise(p)
    .map(res => res.items).switchMap( items =>  objs.of(...items) ).map( item => item.volumeInfo)
     .map( info => {
        const obj = {
            title : info.title,
            description : info.description || '',
            authors : info.authors ? info.authors.join(',') : '',
            categories : info.categories ? info.categories.join(',') : '',
            thumbnail : info.imageLinks.smallThumbnail
            
        };
        return obj;
    })
    .subscribe( displayBooks)