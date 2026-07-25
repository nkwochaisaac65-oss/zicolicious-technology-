const products = [

{
name:"Power Bank 50,000mAh",
price:40000,
image:"images/powerbank50.jpg",
desc:"Ultra high capacity power bank with fast charging and reliable battery backup."
},

{
name:"Power Bank 20,000mAh",
price:15000,
image:"images/powerbank20.jpg",
desc:"Portable 20,000mAh power bank for everyday charging."
},

{
name:"iTel Power Bank",
price:20000,
image:"images/itel-powerbank.jpg",
desc:"Strong and reliable iTel power bank."
},

{
name:"Smartwatch",
price:20000,
image:"images/smartwatch.jpg",
desc:"Smart watch with fitness tracking and notifications."
},

{
name:"iTel Smartwatch",
price:30000,
image:"images/itel-smartwatch.jpg",
desc:"Premium iTel smartwatch with smart features."
},

{
name:"Oraimo Smartwatch",
price:30000,
image:"images/oraimo-smartwatch.jpg",
desc:"Oraimo smartwatch with health tracking and long battery."
},

{
name:"Transparent Buds",
price:6000,
image:"images/transparent-buds.jpg",
desc:"Stylish wireless earbuds with clear sound."
},

{
name:"Neckband Earpiece",
price:5000,
image:"images/neckband.jpg",
desc:"Comfortable neckband earpiece with quality sound."
},

{
name:"JBL Earpod",
price:15000,
image:"images/jbl-earpod.jpg",
desc:"Premium JBL audio experience."
},

{
name:"Small Tripod Stand",
price:6000,
image:"images/small-tripod.jpg",
desc:"Portable tripod for photos and videos."
},

{
name:"Adjustable Tripod Stand",
price:10000,
image:"images/tripod.jpg",
desc:"Strong adjustable tripod for content creators."
},

{
name:"Manteo Multifunctional Tripod",
price:5000,
image:"images/manteo-tripod.jpg",
desc:"Multi-purpose tripod stand for phones and cameras."
},

{
name:"Dex Fan",
price:10000,
image:"images/dex-fan.jpg",
desc:"Portable fan for cool comfort anywhere."
}

];


let cart=[];


function displayProducts(){

let box=document.getElementById("productList");

box.innerHTML=products.map((p,index)=>`

<div class="product-card">

<img src="${p.image}" alt="${p.name}">

<h3>${p.name}</h3>

<p>${p.desc}</p>

<h3 class="price">₦${p.price.toLocaleString()}</h3>

<button onclick="addCart