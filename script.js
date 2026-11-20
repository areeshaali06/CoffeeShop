
let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;

    updateCart();

    alert(name + " added to cart!");
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    cart.forEach(function(item) {
        let li = document.createElement("li");

        li.textContent = item.name + " - Rs. " + item.price;

        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully! Total: Rs. " + total);

    cart = [];
    total = 0;

    updateCart();
}
