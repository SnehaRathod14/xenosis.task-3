// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 12.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 15.99, image: 'https://via.placeholder.com/150' },
];

// State to keep track of cart items
const cart = [];

// Function to display products
function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
}

// Function to add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Function to update cart
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-list');
    cartItems.innerHTML = '';
    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        document.getElementById('cart-items').classList.add('hidden');
    } else {
        document.getElementById('cart-items').classList.remove('hidden');
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
        });
    }
}

// Checkout function
document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Checkout functionality not implemented');
});

// Cart button toggle
document.getElementById('cart-button').addEventListener('click', () => {
    const cartItemsSection = document.getElementById('cart-items');
    cartItemsSection.classList.toggle('hidden');
});

// Initialize
displayProducts();
