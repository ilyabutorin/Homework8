fetch('https://fakestoreapi.com/products')
    .then(resp => resp.json())
    .then(data => createCards(data));

const products = document.querySelector('.products');

function createCards(arr){
    arr.forEach(({title, price, image}) =>{

        const container = document.createElement('div');
        const cont_title = document.createElement('p');
        const cont_price = document.createElement('p');
        const cont_img = document.createElement('img')
        container.classList.add('product');
        cont_img.classList.add('product_image');

        cont_title.innerText = `Product title: ${title}`;
        cont_price.innerText = `Price: ${price} €`;
        cont_img.src = image;        
        container.append(cont_img, cont_title, cont_price);
        products.append(container);
    })
};