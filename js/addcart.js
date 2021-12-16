let carts = document.querySelectorAll('.add-cart');

let products =[
    {
        name: 'Cherry Love Cake',
        tag: 'yyy',
        price:20,
        incart: 0
    },
    {
        name: 'Chocolate cake',
        tag: 'yyy',
        price:20,
        incart: 0
    },
    {
        name: 'cake1',
        tag: 'yyy',
        price:20,
        incart: 0
    },
    {
        name: 'cake1',
        tag: 'yyy',
        price:20,
        incart: 0
    },
    {
        name: 'cake1',
        tag: 'yyy',
        price:20,
        incart: 0
    }
];

for(let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    
}
onLoadCartNumbers();