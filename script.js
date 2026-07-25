const products = [

{
name:"Power Bank 50,000mAh",
price:40000,
image:"images/powerbank50.jpg",
description:"High capacity power bank with fast charging and long battery backup."
},

{
name:"Power Bank 20,000mAh",
price:15000,
image:"images/powerbank20.jpg",
description:"Portable power bank for everyday charging."
},

{
name:"iTel Power Bank",
price:20000,
image:"images/itel-powerbank.jpg",
description:"Reliable iTel power bank with safety protection."
},

{
name:"Smartwatch",
price:20000,
image:"images/smartwatch.jpg",
description:"Smartwatch with fitness tracking and notifications."
},

{
name:"iTel Smartwatch",
price:30000,
image:"images/itel-smartwatch.jpg",
description:"Premium iTel smartwatch with smart features."
},

{
name:"Oraimo Smartwatch",
price:30000,
image:"images/oraimo-smartwatch.jpg",
description:"Oraimo smartwatch with health tracking."
},

{
name:"Transparent Buds",
price:6000,
image:"images/transparent-buds.jpg",
description:"Wireless earbuds with clear sound quality."
},

{
name:"Neckband Earpiece",
price:5000,
image:"images/neckband.jpg",
description:"Comfortable neckband earpiece."
},

{
name:"JBL Earpod",
price:15000,
image:"images/jbl-earpod.jpg",
description:"Premium JBL sound experience."
},

{
name:"Small Tripod Stand",
price:6000,
image:"images/small-tripod.jpg",
description:"Portable tripod for videos and pictures."
},

{
name:"Adjustable Tripod Stand",
price:10000,
image:"images/tripod.jpg",
description:"Strong adjustable tripod stand."
},

{
name:"Manteo Multifunctional Tripod",
price:5000,
image:"images/manteo-tripod.jpg",
description:"Multi-purpose tripod for content creators."
},

{
name:"Dex Fan",
price:10000,
image:"images/dex-fan.jpg",
description:"Portable fan for cooling anywhere."
}

];


let cart = [];



function showProducts(){

let box = document.getElementById("productsContainer");


box.innerHTML = products.map((product,index)=>`

<div class="product-card">

<img src="${product.image}" alt="${product.name}">