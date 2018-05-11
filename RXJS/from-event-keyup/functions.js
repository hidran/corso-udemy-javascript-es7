function cleanBooks(){
     const total = document.querySelector('#total');
     total.innerHTML = 0;
    const boooksEle = document.querySelector('#books');
    boooksEle.innerHTML =  '';
}
function updateCount ( bookCount ) {
    const total = document.querySelector('#total');
    total.innerHTML = bookCount; 
}
function displayBooks(book) {

    const boooksEle = document.querySelector('#books');

    const bookTpl = `
                        <img height="200" class="card-img-top" src="${book.thumbnail}" alt="Card image cap">
                            <div class="card-body">
                             <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">${book.description}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                 </div>
                       `;
    const  div = document.createElement('div');
    div.className = "card col-md-3";
    div.innerHTML = bookTpl;
    boooksEle.appendChild(div)











}
