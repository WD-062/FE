import { addToCart } from "./storage.js";

const createProductCard = (product) => {
  const card = document.createElement("div");
  card.className = "bg-white shadow-md rounded-lg overflow-hidden";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;
  image.className = "w-full h-48 object-cover";

  const cardBody = document.createElement("div");
  cardBody.className = "p-4";

  const title = document.createElement("h2");
  title.className = "text-lg font-semibold truncate";
  title.textContent = product.title;

  const price = document.createElement("p");
  price.className = "text-gray-700 text-base font-bold mt-2";
  price.textContent = `$${product.price}`;

  const addButton = document.createElement("button");
  addButton.className =
    "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200";
  addButton.textContent = "Add to Cart";
  addButton.addEventListener("click", () => addToCart(product));

  cardBody.appendChild(title);
  cardBody.appendChild(price);
  cardBody.appendChild(addButton);

  card.appendChild(image);
  card.appendChild(cardBody);

  return card;
};

export { createProductCard };
