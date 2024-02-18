var products = [
    {
        name: "Oscar",
        price: 5,
        image: "Oscar.jpg",
        description: "Meet Oscar, the spider monkey. With his keen senses and nimble fingers, Oscar keeps your car safe from theft and assists with common issues like jump-starts and locked doors. Trust Oscar to safeguard your vehicle with his unmatched skills and reliability."
    },
    {
        name: "Martin",
        price: 7,
        image: "Martin.jpg",
        description: "Meet Martin, the clever chimpanzee. With his sharp mind and quick reflexes, Martin ensures your car stays safe and assists with roadside issues. Trust Martin for top-notch security and peace of mind on the road."
    },
    {
        name: "Gary",
        price: 12,
        image: "Gary.jpg",
        description: " Introducing Gary, the powerhouse gorilla. With his strength and vigilance, Gary provides robust protection for your vehicle and helps with roadside challenges. Trust Gary for unmatched security and assistance on your journeys."
    }
];

function displayProducts() {
    var productsList = document.getElementById('products-list');
    productsList.innerHTML = '';

    products.forEach(function(product) {
        var productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 200px;">
            <div>
                <h3>${product.name}</h3>
                <p>Price: ${product.price} Bananas</p>
                <p>Description: ${product.description}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Add to cart</button>
                <button onclick="removeFromCart('${product.name}', ${product.price})">Remove from cart</button>

            </div>
        `;
        productsList.appendChild(productItem);
    });
}


function addToCart(name, price) {
    var cartItems = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');

    var item = document.createElement('li');
    item.textContent = `${name} - ${price} Bananas`;
    cartItems.appendChild(item);

    var total = parseInt(cartTotal.textContent);
    total += price;
    cartTotal.textContent = total;
}

function removeFromCart(name, price) {
    var cartItems = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');

    var items = cartItems.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.textContent.includes(name) && item.textContent.includes(price)){
            item.parentNode.removeChild(item);

            var total = parseInt(cartTotal.textContent);
            total -= price;
            cartTotal.textContent = total;

            break;
        }
    }
}

window.onload = function() {
    displayProducts();
};
