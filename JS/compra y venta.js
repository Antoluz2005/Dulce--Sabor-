let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}