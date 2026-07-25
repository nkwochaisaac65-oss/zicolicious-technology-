const products = [
  {id:1,name:"Power Bank 50,000mAh",price:40000,img:"https://images.unsplash.com/photo-1609094791681-60ae8cda7e7f?q=80&w=600",desc:"Ultra high capacity power bank for days of usage.",features:["50000mAh","2 USB Ports","Fast Charging","LED Display"],category:"bestseller"},
  {id:2,name:"Power Bank 20,000mAh",price:15000,img:"https://images.unsplash.com/photo-1583863788434-a7050a93ee7b?q=80&w=600",desc:"Slim and powerful. Perfect for daily carry.",features:["20000mAh","PD Charging","Compact Design"],category:"flash"},
  {id:3,name:"iTel Power Bank",price:20000,img:"https://images.unsplash.com/photo-1613040809024-b4ef7ba7a29b?q=80&w=600",desc:"Reliable iTel power bank with safety protection.",features:["20000mAh","Dual Output","Safety Chip"],category:"new"},
  {id:4,name:"Smartwatch",price:20000,img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600",desc:"Stay connected on your wrist.",features:["Heart Rate","Notifications","7 Day Battery"],category:"bestseller"},
  {id:5,name:"iTel Smartwatch",price:30000,img:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600",desc:"Premium iTel smartwatch with AMOLED display.",features:["AMOLED","Bluetooth Call","Health Tracking"],category:"new"},
  {id:6,name:"Oraimo Smartwatch",price:30000,img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600",desc:"Oraimo OSW-20 with fitness features.",features:["Sports Modes","Waterproof","Long Battery"],category:"bestseller"},
  {id:7,name:"Transparent Buds",price:6000,img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600",desc:"Crystal clear sound in a transparent design.",features:["Bluetooth 5.3","Touch Control","12H Playtime"],category:"flash"},
  {id:8,name:"Neckband Earpiece",price:5000,img:"https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=600",desc:"Magnetic neckband for music and calls.",features:["Magnetic Earbuds","Bass Sound","10H Battery"],category:"new"},
  {id:9,name:"JBL Earpod",price:15000,img:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600",desc:"Authentic JBL sound quality.",features:["Deep Bass","Noise Isolation","Case Charging"],category:"bestseller"},
  {id:10,name:"Small Tripod Stand",price:6000,img:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=600",desc:"Compact tripod for content creators.",features:["Lightweight","Phone Holder","360 Rotation"],category:"flash"},
  {id:11,name:"Adjustable Tripod Stand",price:10000,img:"https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600",desc:"Full height adjustable tripod.",features:["1.6m Height","Aluminum","Remote Control"],category:"new"},
  {id:12,name:"Manteo Multifunctional Tripod",price:5000,img:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=600",desc:"2 in 1 tripod and selfie stick.",features:["Multifunctional","Foldable","Bluetooth Shutter"],category:"flash"},
  {id:13,name:"Dex Fan",price:10000,img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600",desc:"Portable mini fan for hot days.",features:["USB Rechargeable","3 Speeds","Quiet Motor"],category:"new"}
];

let cart = JSON.parse(localStorage.getItem('zicoCart')) || [];
let discount = 0;

function renderProducts(){
  const grid = document.getElementById('product-grid');
  const flash = document.getElementById('flash-deals');
  const newArr = document.getElementById('new-arrivals');

  products.forEach(p=>{
    const card = `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <div class="product-info">
          <h3>${p.name}</h3>
          <p class="price">₦${p.price.toLocaleString()}</p>
          <p>${p.desc}</p>
          <ul class="features">${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
          <button class="btn btn-blue" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>`;
    grid.innerHTML += card;
    if(p.category==='flash') flash.innerHTML += card;
    if(p.category==='new') newArr.innerHTML += card;
  });
}

function addToCart(id){
  const item = cart.find(i=>i.id===id);
  if(item) item.qty++;
  else cart.push({...products.find(p=>p.id===id), qty:1});
  saveCart();
  alert('Added to cart');
}

function saveCart(){
  localStorage.setItem('zicoCart', JSON.stringify(cart));
  updateCart();
}

function updateCart(){
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item,index)=>{
    total += item.price * item.qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <p>${item.name}</p>
          <p>₦${item.price.toLocaleString()}</p>
          <button class="qty-btn" onclick="changeQty(${index},-1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${index},1)">+</button>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      </div>`;
  });
  const finalTotal = total * (1 - discount);
  document.getElementById('cart-total').innerText = finalTotal.toLocaleString();
  document.getElementById('cart-count').innerText = cart.reduce((a,b)=>a+b.qty,0);
}

function changeQty(i,delta){
  cart[i].qty += delta;
  if(cart[i].qty<=0) cart.splice(i,1);
  saveCart();
}

function removeItem(i){
  cart.splice(i,1);
  saveCart();
}

function openCart(){document.getElementById('cart').classList.add('active');document.getElementById('overlay').classList.add('active');}
function closeCart(){document.getElementById('cart').classList.remove('active');document.getElementById('overlay').classList.remove('active');}

function applyPromo(){
  const code = document.getElementById('promo-code').value;
  if(code==='Isaac123'){
    discount = 0.3;
    document.getElementById('discount-msg').innerText = '30% discount applied!';
  }else{
    discount = 0;
    document.getElementById('discount-msg').innerText = 'Invalid code';
  }
  saveCart();
}

function checkoutWhatsApp(){
  if(cart.length===0){alert('Cart is empty');return;}
  let msg = 'Hello Zicolicious Technology, I want to order:%0A';
  cart.forEach(i=>{msg+=`${i.qty}x ${i.name} - ₦${i.price.toLocaleString()}%0A`});
  msg+=`Total: ₦${document.getElementById('cart-total').innerText}`;
  window.open(`https://wa.me/2347031319373?text=${msg}`,'_blank');
}

// Reviews
function loadReviews(){
  const reviews = JSON.parse(localStorage.getItem('zicoReviews')) || [];
  document.getElementById('reviews').innerHTML = reviews.map(r=>`
    <div class="review-card"><strong>${r.name}</strong><p>${r.text}</p></div>
  `).join('');
}
document.getElementById('review-form').addEventListener('submit',e=>{
  e.preventDefault();
  const reviews = JSON.parse(localStorage.getItem('zicoReviews')) || [];
  reviews.push({name:review-name.value,text:review-text.value});
  localStorage.setItem('zicoReviews',JSON.stringify(reviews));
  e.target.reset();
  loadReviews();
});

// Policies
const policies = {
  privacy:"We respect your privacy. Your data is only used to process orders and improve service.",
  return:"7 day return policy for defective items. Product must be unused and in original packaging.",
  delivery:"Delivery within 1-3 business days in Port Harcourt. Nationwide delivery available.",
  terms:"By using this site you agree to our terms. All prices in Naira."
};
function showPolicy(key){
  document.getElementById('policy-text').innerText = policies[key];
  document.getElementById('policy-modal').style.display='flex';
}
function closePolicy(){document.getElementById('policy-modal').style.display='none';}

renderProducts();
updateCart();
loadReviews();