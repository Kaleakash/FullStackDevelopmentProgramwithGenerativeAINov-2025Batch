// create simple js function which load product 
// rest api and display those details in index.html page 
// in proper way 
async function loadProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <img src="${product.image}" alt="${product.title}" />
            `;
            productContainer.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProducts);
