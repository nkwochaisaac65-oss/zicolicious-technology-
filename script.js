// Zicolicious Tech & Accessories
// Main Website Functions


// WhatsApp Buy Now Checkout

function buyWhatsApp(productName, price) {

    let message =
    `Hello Zicolicious Tech & Accessories,%0A%0A` +
    `I want to order:%0A` +
    `Product: ${productName}%0A` +
    `Price: ₦${price}%0A%0A` +
    `My Name:%0A` +
    `Delivery Address:%0A%0A` +
    `Please provide payment details.`;

    let whatsappURL =
    "https://wa.me/2347031319373?text=" + message;

    window.open(whatsappURL, "_blank");
}



// Product Search

function searchProducts(){

    let input =
    document.getElementById("searchBox")
    .value.toLowerCase();


    let products =
    document.querySelectorAll(".product");


    products.forEach(product => {

        let name =
        product.querySelector("h3")
        .innerText.toLowerCase();


        if(name.includes(input)){
            product.style.display="block";
        }

        else{
            product.style.display="none";
        }

    });

}



// Shopping Cart

let cart = [];


function addToCart(product){

    cart.push(product);

    alert(product.name + " added to cart");

    updateCart();

}



function removeFromCart(index){

    cart.splice(index,1);

    updateCart();

}



function updateCart(){

    let cartBox =
    document.getElementById("cartItems");


    if(!cartBox) return;


    cartBox.innerHTML="";


    let total = 0;


    cart.forEach((item,index)=>{


        total += Number(item.price);


        cartBox.innerHTML += `

        <div class="cart-item">

        <p>${item.name}</p>

        <p>₦${item.price}</p>

        <button onclick="removeFromCart(${index})">
        Remove
        </button>

        </div>

        `;

    });


    document.getElementById("cartTotal").innerHTML =
    "Total: ₦" + total;

}



// Stock System

let stockItems = {

    "ZICO-001": 5,
    "ZICO-002": 100,
    "ZICO-003": 10

};


function checkStock(productID){

    let quantity =
    stockItems[productID];


    if(quantity <= 5){

        return "Only " + quantity +
        " left in stock";

    }


    return "In Stock";

}



// Dark Mode

function darkMode(){

    document.body.classList.toggle("dark");

}



// Automatic Stock Update Example

setTimeout(()=>{

    let stockMessage =
    document.querySelector(".stock");


    if(stockMessage){

        stockMessage.innerHTML =
        "100 left in stock";

    }

},36000000); // updates after 10 hours