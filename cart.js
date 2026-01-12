let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartBox = document.getElementById("cart-items");
const totalBox = document.getElementById("cart-total");
const grandBox = document.getElementById("cart-grand");
function renderCart() {
  cartBox.innerHTML = "";
  let total = 0;
  if (cart.length === 0) {
    cartBox.innerHTML = `
      <div class="empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <p>Add products from shop page.</p>
        <a href="shop.html" class="btn-black">Go to Shop</a>
      </div>
    `;
    totalBox.innerText = "₹0";
    grandBox.innerText = "₹0";
    return;
  }
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    cartBox.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" class="cart-img" alt="${item.name}">
        <div class="cart-details">
          <h3>${item.name}</h3>
          <p class="cart-meta">
            Size: <b>${item.size ? item.size : "N/A"}</b>
          </p>
          <p class="cart-price">₹${item.price}</p>
        </div>
        <div class="cart-qty">
          <button onclick="updateQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${index}, 1)">+</button>
        </div>
        <div class="cart-total-item">
          ₹${item.price * item.qty}
        </div>
        <button class="remove-btn" onclick="removeItem(${index})">✖</button>
      </div>
    `;
  });
  totalBox.innerText = "₹" + total;
  grandBox.innerText = "₹" + total;
  localStorage.setItem("cart", JSON.stringify(cart));
}
function updateQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  renderCart();
}
function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}
function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
renderCart();