import { fetchProducts } from "./modules/network.js";
import { createProductCard } from "./modules/ui.js";

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const productContainer = document.getElementById("product-container");
        const products = await fetchProducts();
        console.log(products);
        if(products && products.length > 0) {
            products.forEach((product) => {
                const productCard = createProductCard(product);
                productContainer.appendChild(productCard);
            });
        } else {
            const noProductsMessage = document.createElement("p");
            noProductsMessage.textContent = "No products available.";
            productContainer.appendChild(noProductsMessage);
        }

    } catch (error) {
        console.error("Error initializing app:", error);
    }
});
