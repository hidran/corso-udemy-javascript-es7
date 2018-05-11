const albumUrl = 'https://jsonplaceholder.typicode.com/albums';

 total.innerHTML = 0 ;
const p = fetch(albumUrl).
then( res => res.json()).
then(
    result => {
  
    }
).catch(error=> console.log(error))
  