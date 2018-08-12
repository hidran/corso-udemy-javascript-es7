"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const albumUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
const objs = Rx.Observable;
const searchEle = document.getElementById('search');
function getBooks(q) {
    const p = fetch(albumUrl + q).then(res => res.json());
    const bookObjs = objs.fromPromise(p)
        .map((books) => books.items || [])
        .filter((items) => items.length > 0)
        .do((items) => updateCount(items.length))
        .switchMap((items) => objs.of(...items))
        .map((item) => item.volumeInfo)
        .map((info) => {
        const obj = {
            title: info.title,
            description: info.description || '',
            authors: info.authors ? info.authors.join(',') : '',
            categories: info.categories ? info.categories.join(',') : '',
            thumbnail: info.imageLinks.smallThumbnail
        };
        return obj;
    });
    return bookObjs;
}
objs.fromEvent(searchEle, 'input')
    .map(ele => ele.target.value)
    .filter((val) => val.length > 2)
    .debounceTime(10)
    .do(() => cleanBooks())
    .switchMap((q) => getBooks(q))
    .subscribe(displayBooks);
