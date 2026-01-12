function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = cart.find(item => item.name === name);
  if (product) {
    product.qty += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      image: image,
      qty: 1
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
function openProduct(name, price, image, desc) {
  const product = {
    name: name,
    price: price,
    image: image,
    desc: desc
  };
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product.html";
}
