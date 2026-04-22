let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added 🛒");
}

function addToWishlist() {
  alert("Added to wishlist 💖");
}

function displayCart() {
  let list = document.getElementById("cartItems");
  if(!list) return;

  let total = 0;
  list.innerHTML="";

  cart.forEach(item=>{
    let li=document.createElement("li");
    li.innerText=item.name+" ₹"+item.price;
    list.appendChild(li);
    total+=item.price;
  });

  document.getElementById("total").innerText="Total ₹"+total;
}

function clearCart(){
  cart=[];
  localStorage.removeItem("cart");
  displayCart();
}

function submitFeedback(){
  let text=document.getElementById("feedbackText").value;
  let li=document.createElement("li");
  li.innerText="✨ "+text;
  document.getElementById("feedbackList").appendChild(li);
}

window.onload=displayCart;
