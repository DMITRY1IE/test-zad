const products = [
    { name: 'Коптильня 10л', price: 1200, id: 1 },
    { name: 'Коптильня 20л', price: 1400, id: 2 },
    { name: 'Коптильня 30л', price: 1600, id: 3 },
];

function getProductPrice(productName) {
    for (let i of products)
        if (i.id === productName)
        return i.price;
    return null;
}

let price = Number(document.getElementById('sum').textContent)
let button_1 = document.getElementById('1')
button_1.addEventListener("click", ()=> {
    document.getElementById('sum').innerHTML = Number(price + getProductPrice(1)).toLocaleString()
    button_1.disabled=true;
    button_1.value = "ДОБАВЛЕНО"
    button_1.classList.add('products__button-disabled') 
    price= getProductPrice(1)+price
})

let button_2 = document.getElementById('2')
button_2.addEventListener("click", ()=> { 
    document.getElementById('sum').innerHTML = Number(price + getProductPrice(2)).toLocaleString()
    button_2.disabled=true;
    button_2.value = "ДОБАВЛЕНО"
    button_2.classList.add('products__button-disabled')
    price= getProductPrice(2)+price
})

let button_3 = document.getElementById('3')
button_3.addEventListener("click", ()=> {
    document.getElementById('sum').innerHTML = Number(price + getProductPrice(3)).toLocaleString()
    button_3.disabled=true;
    button_3.value = "ДОБАВЛЕНО"
    button_3.classList.add('products__button-disabled')
    price= getProductPrice(3)+price
})


  
