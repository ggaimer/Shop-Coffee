let item1 = document.querySelector('.main__catalog-box-item-1')
let item2 = document.querySelector('.main__catalog-box-item-2')
let item3 = document.querySelector('.main__catalog-box-item-3')
let item4 = document.querySelector('.main__catalog-box-item-4')
let item5 = document.querySelector('.main__catalog-box-item-5')
let item6 = document.querySelector('.main__catalog-box-item-6')

let basket = document.querySelector('.basket')

basket.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href='html/basket.html'
    }, 500);
})

item1.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href='html/catalog.html'
    }, 500);
})

item2.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href='html/catalog-2.html'
    }, 500);
})

item3.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href='html/catalog-3.html'
    }, 500);
})

item4.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href='html/catalog-4.html'
    }, 500);
})

item5.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href='html/catalog-5.html'
    }, 500);
})

item6.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href='html/catalog-6.html'
    }, 500);
})