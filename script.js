let cart = [];

function addToCart(productName, price) {
  cart.push({
    name: productName,
    price: price
  });

  updateCart();

  alert(productName + " added to cart!");
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <p>${item.name}</p>
        <p>₦${item.price.toLocaleString()}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  cartTotal.innerHTML = "Total: ₦" + total.toLocaleString();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function checkoutWhatsApp() {

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  let message = "Hello Zicolicious Tech & Accessories,%0A%0AI want to order:%0A";

  let total = 0;

  cart.forEach(item => {
    message += `- ${item.name} (₦${item.price.toLocaleString()})%0A`;
    total += item.price;
  });

  message += `%0ATotal: ₦${total.toLocaleString()}%0A%0AThank you.`;

  let phoneNumber = "234XXXXXXXXXX"; 
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}