var albumUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
var objs = Rx.Observable;
var searchEle = document.getElementById('search');
function getBooks(q) {
    var p = fetch(albumUrl + q).then(function (res) { return res.json(); });
    var bookObjs = objs.fromPromise(p)
        .map(function (books) { return books.items || []; })
        .filter(function (items) { return items.length > 0; })
        .do(function (items) { return updateCount(items.length); })
        .switchMap(function (items) { return objs.of.apply(objs, items); })
        .map(function (item) { return item.volumeInfo; })
        .map(function (info) {
        var obj = {
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
    .map(function (ele) { return ele.target.value; })
    .filter(function (val) { return val.length > 2; })
    .debounceTime(10)
    .do(function () { return cleanBooks(); })
    .switchMap(function (q) { return getBooks(q); })
    .subscribe(displayBooks);
