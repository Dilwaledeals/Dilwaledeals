document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});

async function loadProducts() {

    const response = await fetch("data/products.json");
    const products = await response.json();

    const productContainer = document.getElementById("new-arrivals");

    if (!productContainer) return;

    products.forEach(product => {

        productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p class="price">
                ₹${product.price}
                <span>₹${product.mrp}</span>
            </p>

            <a href="product.html?id=${product.id}" class="view-btn">
                View Details
            </a>

        </div>

        `;

    });

}