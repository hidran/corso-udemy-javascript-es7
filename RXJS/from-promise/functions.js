function createList(result) {
    let ul = document.querySelector('#albums');
    let total = document.querySelector('#total');

    total.innerHTML = result.length;
    const data = result.map( result => result.title);

    data.forEach(ele => {
        let li = document.createElement('li');
        li.innerHTML = ele;
        ul.appendChild(li)
    });
}