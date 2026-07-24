let cart = [];
let total = 0;

function addCart(product, price){

cart.push(product);
total += price;

document.getElementById("cartItems").innerHTML =
cart.map(item => "✅ " + item).join("<br>");

document.getElementById("total").innerHTML = total;

}