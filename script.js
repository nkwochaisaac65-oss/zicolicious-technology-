const products = [
  {id:1, name:"Power Bank 50,000mAh", price:40000, cat:"Power Bank", img:"https://images.unsplash.com/photo-1609094869344-39e407fa2184?w=400", desc:"Ultra high capacity 50000mAh. Charge your phone 10+ times. Fast charging, 3 USB ports, LED display.", features:["50000mAh Capacity","Fast Charging","3 USB Ports","LED Power Display"]},
  {id:2, name:"Power Bank 20,000mAh", price:15000, cat:"Power Bank", img:"https://images.unsplash.com/photo-1583863788434-a4a8dd7dd0a1?w=400", desc:"Slim and portable 20000mAh power bank. Perfect for daily use.", features:["20000mAh","Dual USB","Lightweight"]},
  {id:3, name:"iTel Power Bank", price:20000, cat:"Power Bank", img:"https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400", desc:"Original iTel 20000mAh with safety protection.", features:["20000mAh","Original iTel","Safety Chip"]},
  {id:4, name:"Smartwatch", price:20000, cat:"Smartwatch", img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", desc:"Fitness smartwatch with heart rate, calls, and notifications.", features:["Heart Rate","Call Function","7 Days Battery"]},
  {id:5, name:"iTel Smartwatch", price:30000, cat:"Smartwatch", img:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400", desc:"Premium iTel smartwatch with AMOLED display.", features:["AMOLED Screen","Bluetooth Call","Sports Modes"]},
  {id:6, name:"Oraimo Smartwatch", price:30000, cat:"Smartwatch", img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400", desc:"Oraimo watch with long battery and health tracking.", features:["2 Weeks Battery","SpO2 Monitor","Waterproof"]},
  {id:7, name:"Transparent Buds", price:6000, cat:"Earbuds", img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", desc:"Stylish transparent wireless earbuds with deep bass.", features:["Bluetooth 5.3","Touch Control","24H Battery"]},
  {id:8, name:"Neckband Earpiece", price:5000, cat:"Earbuds", img:"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400", desc:"Comfortable neckband with magnetic earbuds.", features:["10H Playtime","Magnetic Buds","Fast Charge"]},
  {id:9, name:"Small Tripod Stand", price:6000, cat:"Tripod", img:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400", desc:"Compact tripod for phones and cameras.", features:["Foldable","Phone Holder","Lightweight"]},
  {id:10, name:"Adjustable Tripod Stand", price:10000, cat:"Tripod", img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400", desc:"Professional adjustable tripod up to 2m height.", features:["2m Height","360 Rotation","Stable Base"]}
];

let cart = JSON.parse(localStorage.getItem('zicoCart')) || [];

function renderProducts(list=products){
  document.getElementById('productGrid').innerHTML = list.map(p=>`
    <div class="card" onclick="openProduct(${p.id})">
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <div class="stars">⭐</div>
      <div class="price">₦${p.price.toLocaleString()}</div>
      <button class="btn-gold" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}

function addToCart(id){
  const item = products.find(p=>p.id===id);
  const exist = cart.find(c=>c.id===id);
  if(exist) exist.qty++;
  else cart.push({...item, qty:1});
  saveCart();
  alert(`${item.name} added to cart`);
}

function saveCart(){
  localStorage.setItem('zicoCart', JSON.stringify(cart));
  document.getElementById('cartCount').innerText = cart.reduce((s,i)=>s+i.qty,0);
  updateCartUI();
}

function updateCartUI(){
  const wrap = document.getElementById('cartItems');
  if(cart.length===0){wrap.innerHTML="<p>Cart is empty</p>"; document.getElementById('cartTotal').innerText=0; return}
  wrap.innerHTML = cart.map((i,idx)=>`
    <div style="display:flex;justify-content:space-between;align-items:center;margin:12px 0;border-bottom:1px solid #eee;padding-bottom:8px">
      <div>
        <b>${i.name}</b><br>
        ₦${i.price.toLocaleString()} x 
        <button onclick="changeQty(${idx},-1)">-</button> ${i.qty} <button onclick="changeQty(${idx},1)">+</button>
      </div>
      <button onclick="removeItem(${idx})" style="color:red;border:none;background:none;cursor:pointer">Remove</button>
    </div>
  `).join('');
  document.getElementById('cartTotal').innerText = cart.reduce((s,i)=>s+i.price*i.qty,0).toLocaleString();
}

function changeQty(idx,val){cart[idx].qty+=val; if(cart[idx].qty<1) cart.splice(idx,1); saveCart()}
function removeItem(idx){cart.splice(idx,1); saveCart()}

function openCart(){document.getElementById('cartModal').style.display='flex'; updateCartUI()}
function closeCart(){document.getElementById('cartModal').style.display='none'}

function openProduct(id){
  const p = products.find(x=>x.id===id);
  document.getElementById('productDetail').innerHTML = `
    <span class="close" onclick="document.getElementById('productModal').style.display='none'">&times;</span>
    <img src="${p.img}" style="width:100%;border-radius:12px">
    <h2>${p.name}</h2>
    <div class="stars">⭐⭐⭐ 4.9 (120 Reviews)</div>
    <h3 class="price">₦${p.price.toLocaleString()}</h3>
    <p>${p.desc}</p>
    <h4>Features:</h4>
    <ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
    <button class="btn-gold" onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  document.getElementById('productModal').style.display='flex';
}

function checkoutWhatsApp(){
  if(cart.length===0) return alert("Cart empty");
  let msg = `Hello Zicolicious Technology, I want to order:%0A`;
  cart.forEach(i=> msg += `- ${i.name} x${i.qty} = ₦${(i.price*i.qty).toLocaleString()}%0A`);
  msg += `Total: ₦${cart.reduce((s,i)=>s+i.price*i.qty,0).toLocaleString()}`;
  window.open(`https://wa.me/2347031319373?text=${msg}`);
}

function filterCat(cat){renderProducts(products.filter(p=>p.cat===cat))}
function searchProducts(){
  const q = document.getElementById('search').value.toLowerCase();
  renderProducts(products.filter(p=>p.name.toLowerCase().includes(q)))
}
function scrollToSection(id){document.getElementById(id).scrollIntoView()}
function openPage(page){alert(page.toUpperCase() + " page - You can add content here")}

saveCart();
renderProducts();