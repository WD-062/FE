import { createQuoteElement } from "./modules/ui.js";
import { addQuote } from "./modules/storage.js";

// Selecting from the DOM
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const reloadBtn = document.getElementById("reload");

// console.log(ul);

// Add event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const userInput = document.getElementById("userInput").value.trim();
  console.log(userInput); // Log the input value to the console
  //   console.log(event.target.elements.userInput.value);

  if (!userInput) return alert("Please enter a value.");

  const newQuote = { id: Date.now(), text: userInput }; // Create a new quote object

  // needs to be substituted for the createQuoteElement function
  const li = createQuoteElement(newQuote); // Create a new list item
  // needs to be substituted for the createQuoteElement function
  ul.insertBefore(li, ul.firstChild);

  addQuote(newQuote); // Add the new quote to the array

  // reseting the form
  form.reset(); // Reset the form fields
});

reloadBtn.addEventListener("click", () => {
  window.location.reload(); // Reload the page
});

window.addEventListener("DOMContentLoaded", () => {
  const quotes = JSON.parse(localStorage.getItem("quotes")) || [];

  quotes.forEach((quote) => {
    const li = createQuoteElement(quote); // Create a new list item
    ul.insertBefore(li, ul.firstChild);
  });
});
