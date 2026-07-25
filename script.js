const PRODUCTS = [
{id:1,name:"Power Bank 50,000mAh",price:40000,img:"https://images.unsplash.com/photo-1609094791681-60ae8cda7e7f?q=80&w=600",desc:"Power your life for a week. Fast charge + LED."},
{id:2,name:"Power Bank 20,000mAh",price:15000,img:"https://images.unsplash.com/photo-1583863788434-a7050a93ee7b?q=80&w=600",desc:"Slim, powerful, fits in your pocket."},
{id:3,name:"iTel Power Bank",price:20000,img:"https://images.unsplash.com/photo-1613040809024-b4ef7ba7a29b?q=80&w=600",desc:"Safe charging with iTel reliability."},
{id:4,name:"Smartwatch",price:20000,img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600",desc:"Track health, calls, and notifications."},
{id:5,name:"iTel Smartwatch",price:30000,img:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600",desc:"AMOLED display with premium strap."},
{id:6,name:"Oraimo Smartwatch",price:30000,img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600",desc:"Fitness modes + long battery life."},
{id:7,name:"Transparent Buds",price:6000,img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600",desc:"See-through design, crystal audio."},
{id:8,name:"Neckband Earpiece",price:5000,img:"https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=600",desc:"Magnetic, bass sound, all day comfort."},
{id:9,name:"JBL Earpod",price:15000,img:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600",desc:"Deep bass and noise isolation."},
{id:10,name:"Small Tripod Stand",price:6000,img:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=600",desc:"Perfect for TikTok and photos."},
{id:11,name:"Adjustable Tripod Stand",price:10000,img:"https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600",desc:"Extends to 1.6m with remote."},
{id:12,name:"Manteo Multifunctional Tripod",price:5000,img:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=600",desc:"Tripod + Selfie stick 2 in 1."},
{id:13,name:"Dex Fan",price:10000,img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600",desc:"Portable USB fan, 3 speeds."}
];

let cart = JSON.parse(localStorage.getItem('zico_cart')) || [];
let discount = 0;

function render(){
  document.getElementById('products').innerHTML = PRODUCTS.map(p=>`
    <div class="card">
      <img src="${p.img}" alt="${p.name}">
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p class="price">₦${p.price.toLocaleString()}</p>
        <button class="btn" onclick="add(${p.id})">Add to Cart</button>
      </div>
    </div>
  `).join('');
  updateCart();
}

function add(id){
  let item = cart.find(x=>x.id===id);
  item? item.qty++ : cart.push({...PRODUCTS.find(p=>p.id===id),qty:1});
  save();
}

function save(){
  localStorage.setItem('zico_cart',JSON.stringify(cart));
  updateCart();
}

function updateCart(){
  const wrap = document.getElementById('cartItems');
  wrap.innerHTML = '';
  let total = 0;
  cart.forEach((c,i)=>{
    total += c.price*c.qty;
    wrap.innerHTML += `
      <div class="cart-item">
        <img src="${c.img}">
        <div>
          <p>${c.name}</p>
          <p>₦${c.price.toLocaleString()}</p>
          <button onclick="qty(${i},-1)">-</button> ${c.qty} <button onclick="qty(${i},1)">+</button>
          <button onclick="del(${i})">Remove</button>
        </div>
      </div>`;
  });
  let final = total*(1-discount);
  document.getElementById('total').innerText = final.toLocaleString();
  document.getElementById('count').innerText = cart.reduce((a,b)=>a+b.qty,0);
}

function qty(i,d){cart[i].qty+=d; if(cart[i].qty<1) cart.splice(i,1); save();}
function del(i){cart.splice(i,1); save();}
function toggleCart(){document.getElementById('cart').classList.toggle('active');document.getElementById('overlay').classList.toggle('active');}

function applyPromo(){
  let code = document.getElementById('promo').value;
  if(code==='Isaac123'){discount=0.3;document.getElementById('promoMsg').innerText='30% OFF Applied';}
  else {discount=0;document.getElementById('promoMsg').innerText='Invalid Code';}
  save();
}

function whatsappOrder(){
  if(!cart.length) return alert('Cart is empty');
  let msg = 'Hello Zicolicious, I want to order:%0A';
  cart.forEach(i=>msg+=`${i.qty}x ${i.name} - ₦${i.price.toLocaleString()}%0A`);
  msg+=`Total: ₦${document.getElementById('total').innerText}`;
  window.open(`https://wa.me/2347031319373?text=${msg}`,'_blank');
}

// Reviews
function loadReviews(){
  let revs = JSON.parse(localStorage.getItem('zico_reviews'))||[];
  document.getElementById('reviews').innerHTML = revs.map(r=>`<div class="review"><b>${r.name}</b><p>${r.text}</p></div>`).join('');
}
document.getElementById('reviewForm').onsubmit = e=>{
  e.preventDefault();
  let revs = JSON.parse(localStorage.getItem('zico_reviews'))||[];
  revs.push({name:rName.value,text:rText.value});
  localStorage.setItem('zico_reviews',JSON.stringify(revs));
  e.target.reset(); loadReviews();
}

// Policies
const POL = {
privacy:"We do not share your data. Used only for orders.",
return:"Return within 7 days if item is faulty.",
delivery:"Port Harcourt: 1-2 days. Other states: 3-5 days.",
terms:"All sales final. Prices in Naira."
};
function openPolicy(k){document.getElementById('policyText').innerText=POL[k];document.getElementById('policy').style.display='grid';}
function closePolicy(){document.getElementById('policy').style.display='none';}

render(); loadReviews();