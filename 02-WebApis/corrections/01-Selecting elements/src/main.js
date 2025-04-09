// Creating variables
const header = document.querySelector(".header");
const heroContent = document.querySelector(".hero-content");
const title = document.querySelector(".hero-content h1");
const listItems = document.querySelectorAll(".nav-list a");
const button = document.querySelector(".btn");

console.log(title); // <h1>Welcome to the Jungle</h1>
console.log(listItems); // NodeList(4) [a, a, a, a]
console.log(button); // <button class="btn">Click me!</button>

// Styling elements
header.style.backgroundColor = "#b5651d";
title.style.fontSize = "3rem";
listItems.forEach((item) => (item.style.color = "#faf0e6"));

// Adding content

const newParagraph = document.createElement("p");
newParagraph.textContent = "Open daily from 7 AM to 9 PM.";
newParagraph.style.color = "#faf0e6";
console.log(newParagraph); // <p>Open daily from 7 AM to 9 PM.</p>
heroContent.appendChild(newParagraph);
