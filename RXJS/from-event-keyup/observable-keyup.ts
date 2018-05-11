import {Observable} from "@reactivex/rxjs/dist/typings/Observable";

const albumUrl = 'https://www.googleapis.com/books/v1/volumes?q=';


const objs = Rx.Observable;

interface imageLInk {
    smallThumbnail: string
    thumbnail: string
}

interface volumeInfo {
    title: string
    description: string
    authors?: string[]
    categories?: string[]
    imageLinks: imageLInk
}

interface book {
    id: string
    volumeInfo: volumeInfo
}

interface books {
    items?: book[]
    totalItems: number
    kind: string

}
interface BookInfo {
    title: string,
    description: string
    authors:  string
    categories:  string
    thumbnail:  string
}
const searchEle = document.getElementById('search');

 function  getBooks( q: string) : Observable<BookInfo> {
     const p = fetch(albumUrl + q ).then(res => res.json()); 
     
     const bookObjs = objs.fromPromise(p)
         .map((books: books) => books.items || [] )
         .filter((items: book[]) => items.length > 0)
         .do ( (items: book[]) => updateCount(items.length))
         .switchMap((items: book[]) => objs.of(...items))
         .map((item: book) => item.volumeInfo)
         .map((info: volumeInfo) => {
             const obj: BookInfo = {
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
    .filter( (val:string) => val.length > 2)
    .debounceTime(10)
    .do( () => cleanBooks())
    .switchMap( (q:string) =>  getBooks(q))
    
    .subscribe(displayBooks)