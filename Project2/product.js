const product = JSON.parse(localStorage.getItem("selectedProduct"));
if (!product) {
  window.location.href = "shop.html";
}
document.getElementById("product-img").src = product.image;
document.getElementById("product-name").innerText = product.name;
document.getElementById("product-price").innerText = "₹" + product.price;
document.querySelector(".product-desc").innerText =
  product.desc || "No description available.";
const breadcrumb = document.getElementById("breadcrumb-name");
if (breadcrumb) breadcrumb.innerText = product.name;
let selectedSize = null;
let quantity = 1;
const needsSize = product.name.toLowerCase() === "women dress";
const sizeSection = document.getElementById("size-section");
const sizeButtons = document.getElementById("size-buttons");
if (!needsSize) {
  if (sizeSection) sizeSection.style.display = "none";
} else {
  const sizes = ["XS", "M", "L", "XL", "XXL"];
  sizeButtons.innerHTML = "";
  sizes.forEach(size => {
    const btn = document.createElement("button");
    btn.innerText = size;

    btn.onclick = function () {
      document.querySelectorAll("#size-buttons button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSize = size;
    };
    sizeButtons.appendChild(btn);
  });
}
window.changeQty = function (val) {
  quantity += val;
  if (quantity < 1) quantity = 1;
  document.getElementById("qty").innerText = quantity;
};
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) {
    alert(msg);
    return;
  }
  toast.innerText = msg;
  toast.className = "show";
  setTimeout(() => (toast.className = ""), 2500);
}
document.getElementById("add-cart-btn").onclick = function () {
  if (needsSize && !selectedSize) {
    showToast("Please select a size");
    return;
  }
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const sizeValue = needsSize ? selectedSize : "N/A";
  let item = cart.find(p => p.name === product.name && p.size === sizeValue);
  if (item) {
    item.qty += quantity;
  } else {
    cart.push({
      name: product.name,
      price: product.price,
      image: product.image,
      size: sizeValue,
      qty: quantity
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast("Added to cart ✅");
};