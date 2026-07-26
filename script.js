const products = [
  {
    id: 1,
    name: "Smart Watch Bluetooth Call",
    price: 15000,
    desc: "Sleek smartwatch featuring full touch screen display and direct Bluetooth calling.",
    image: "images/smartwatch.jpg"
  },
  {
    id: 2,
    name: "B39 LED Wireless Headset",
    price: 13000,
    desc: "Over-ear Bluetooth headphones with glowing RGB LED light ring design.",
    image: "images/b39-headset.jpg"
  },
  {
    id: 3,
    name: "Smart Bluetooth Sunglasses",
    price: 12000,
    desc: "Hands-free wireless audio sunglasses with built-in earphones and mic.",
    image: "images/smart-sunglasses.jpg"
  },
  {
    id: 4,
    name: "P47 Wireless Stereo Headphones",
    price: 8500,
    desc: "Foldable wireless over-ear headphones with deep bass and high clarity.",
    image: "images/p47-white.jpg"
  },
  {
    id: 5,
    name: "P9 Wireless Over-Ear Headphones",
    price: 16000,
    desc: "Premium metallic finish over-ear headphones with soft cushioned earcups.",
    image: "images/p9-headphone.jpg"
  },
  {
    id: 6,
    name: "HiFi Bass Cannon Bluetooth Headphones",
    price: 17500,
    desc: "3D deep bass over-ear headphones supporting card playback and HD calls.",
    image: "images/bass-cannon-headphone.jpg"
  },
  {
    id: 7,
    name: "Guixia Pro8s TWS Earbuds",
    price: 11000,
    desc: "Sleek black in-ear wireless Bluetooth earbuds with compact charging case.",
    image: "images/guixia-pro8s.jpg"
  },
  {
    id: 8,
    name: "Pro4 White Wireless Earbuds",
    price: 11000,
    desc: "4-5h single use duration with up to 48h total endurance charging case.",
    image: "images/pro4-white-earbuds.jpg"
  },
  {
    id: 9,
    name: "Square Case Matte Black Earbuds",
    price: 12500,
    desc: "Modern square charging case design with ergonomic touch-control earbuds.",
    image: "images/square-black-earbuds.jpg"
  },
  {
    id: 10,
    name: "TWS Semi-In-Ear Earphones",
    price: 10500,
    desc: "Clear voice calls and deep bass performance with a curved capsule case.",
    image: "images/tws-semi-in-ear.jpg"
  },
  {
    id: 11,
    name: "Invisible Open-Ear Earbuds",
    price: 12000,
    desc: "Open-ear clip design for comfortable long wear without ear fatigue.",
    image: "images/invisible-open-ear.jpg"
  },
  {
    id: 12,
    name: "Sport Wireless Neckband - Sky Blue",
    price: 9500,
    desc: "Flexible magnetic wireless neckband headset with rich stereo sound.",
    image: "images/sky-blue-neckband.jpg"
  },
  {
    id: 13,
    name: "EAGEAT F9 TWS Wireless Earbuds",
    price: 11000,
    desc: "Digital LED power display case with true bass wireless audio.",
    image: "images/eageat-f9.jpg"
  },
  {
    id: 14,
    name: "Litglobe Pro6 Ear-Hook Earphones",
    price: 13000,
    desc: "Secure ear-hook design for sports, 24-hour total battery life with case.",
    image: "images/litglobe-pro6.jpg"
  },
  {
    id: 15,
    name: "Owin 10000mAh Power Bank",
    price: 14000,
    desc: "22.5W Super Fast Charge with built-in charging cables and LED display.",
    image: "images/owin-10k.jpg"
  },
  {
    id: 16,
    name: "Easypie 20000mAh Power Bank",
    price: 18500,
    desc: "Dual 2A fast charging output ports with two-way rapid charging support.",
    image: "images/easypie-20k.jpg"
  },
  {
    id: 17,
    name: "50000mAh Container Power Bank - Red",
    price: 28000,
    desc: "Ultra-high capacity container design with built-in multi-cables & digital display.",
    image: "images/powerbank-50k-red.jpg"
  },
  {
    id: 18,
    name: "50000mAh Container Power Bank - Black",
    price: 28000,
    desc: "Heavy-duty 50,000mAh fast-charging power bank in matte black container style.",
    image: "images/powerbank-50k-black.jpg"
  },
  {
    id: 19,
    name: "Portable Desktop Fan with LED Display",
    price: 8500,
    desc: "Compact 4-leaf cooling fan with digital battery level display and fold stand.",
    image: "images/mini-desktop-fan.jpg"
  },
  {
    id: 20,
    name: "Oppselve Flexible Tripod Stand",
    price: 6500,
    desc: "Flexible octopus legs mount for phones and compact cameras.",
    image: "images/phone-tripod.jpg"
  },
  {
    id: 21,
    name: "Universal Smartwatch Clip Charger Cable",
    price: 3500,
    desc: "2-pin clip-on USB charging cable compatible with various smartwatch models.",
    image: "images/smartwatch-clip-charger.jpg"
  }
];

function renderProducts() {
  const container = document.getElementById("product-grid");
  if (!container) return;

  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-img">
      <h3 class="product-title">${product.name}</h3>
      <p class="product-desc">${product.desc}</p>
      <div class="product-bottom">
        <span class="product-price">₦${product.price.toLocaleString()}</span>
        <button class="add-btn">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

document.addEventListener("DOMContentLoaded", renderProducts);
