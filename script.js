let cart = [];

// Scroll to products
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

// Add to Cart
function addToCart(product) {
  cart.push(product);

  // Update cart count
  document.getElementById("cartCount").innerText = cart.length;

  alert(product + " added to cart!");
}