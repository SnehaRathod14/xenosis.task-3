let cart = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    // Clear current cart items
    cartItems.innerHTML = '';

    // Add new items to the cart
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    // Update the total
    cartTotalElement.textContent = cartTotal.toFixed(2);
}
