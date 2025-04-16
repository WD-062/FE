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

  const li = document.createElement("li"); // Create a new list item
  li.textContent = userInput; // Set the text content of the list item to the input value
  ul.insertBefore(li, ul.firstChild);

  // Create array to store the list items
  const quotes = JSON.parse(localStorage.getItem("quotes")) || [];

  quotes.push({ id: Date.now(), text: userInput }); // Add the new quote to the array
  localStorage.setItem("quotes", JSON.stringify(quotes)); // Save the array to local storage

  // reseting the form
  form.reset(); // Reset the form fields
});

reloadBtn.addEventListener("click", () => {
  window.location.reload(); // Reload the page
});

window.addEventListener("DOMContentLoaded", () => {
  const quotes = JSON.parse(localStorage.getItem("quotes")) || [];

  quotes.forEach((quote) => {
    const li = document.createElement("li"); // Create a new list item
    li.textContent = quote.text; // Set the text content of the list item to the input value
    ul.insertBefore(li, ul.firstChild); // Insert the new list item at the beginning of the list
  });
});
