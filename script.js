let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(name, price) {
  let item = cart.find(p => p.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}
function loadCart() {
  let cartItems = document.getElementById("cartItems");
  let totalText = document.getElementById("total");
  if (!cartItems) return;
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    let itemTotal = item.price * item.qty;
    total += itemTotal;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>
          <button onclick="decreaseQty(${index})">−</button>
          ${item.qty}
          <button onclick="increaseQty(${index})">+</button>
        </span>
        <span>₹${itemTotal}</span>
      </div>
    `;
  });
  totalText.innerText = "Total: ₹" + total;
}
function increaseQty(index) {
  cart[index].qty++;
  updateCart();
}
function decreaseQty(index) {
  cart[index].qty--;
  if (cart[index].qty === 0) {
    cart.splice(index, 1);
  }
  updateCart();
}
function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
loadCart();
function filterFromURL() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  if (!category) return;
  const products = document.querySelectorAll(".product-card");
  products.forEach(product => {
    if (product.classList.contains(category)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
filterFromURL();
function openProduct(name, price, image, desc) {
  const product = { name, price, image, desc };
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product.html";
}
function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find(p => p.name === name);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, image, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
function openProduct(name, price, image, desc) {
  const product = { name, price, image, desc };
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product.html";
}