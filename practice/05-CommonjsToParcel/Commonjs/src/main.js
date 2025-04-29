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

  const span = document.createElement("span"); // Create a new span element
  span.textContent = userInput; // Set the text content of the span element to "the userInput

  const deleteBtn = document.createElement("button"); // Create a new button element
  deleteBtn.textContent = "Delete"; // Set the text content of the button to "Delete"
  deleteBtn.classList.add("delete"); // Add a class to the button for styling
  deleteBtn.addEventListener("click", () => {
    li.remove(); // Remove the list item when the button is clicked
    const quotes = JSON.parse(localStorage.getItem("quotes")) || []; // Get the quotes from local storage
    const updatedQuotes = quotes.filter((quote) => quote.text !== userInput); // Filter out the deleted quote
    localStorage.setItem("quotes", JSON.stringify(updatedQuotes)); // Save the updated quotes to local storage
  }); // Add an event listener to the button to handle the delete action

  li.appendChild(span); // Append the span element to the list item
  li.appendChild(deleteBtn); // Append the button element to the list item
  li.classList.add("flex", "justify-between", "items-center", "gap-2"); // Add classes to the list item for styling
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

    const span = document.createElement("span"); // Create a new span element
    span.textContent = quote.text; // Set the text content of the span element to "the userInput

    const deleteBtn = document.createElement("button"); // Create a new button element
    deleteBtn.textContent = "Delete"; // Set the text content of the button to "Delete"
    deleteBtn.classList.add("delete"); // Add a class to the button for styling
    deleteBtn.addEventListener("click", () => {
      li.remove(); // Remove the list item when the button is clicked
      const quotes = JSON.parse(localStorage.getItem("quotes")) || []; // Get the quotes from local storage
      const updatedQuotes = quotes.filter((quote) => quote.text !== userInput); // Filter out the deleted quote
      localStorage.setItem("quotes", JSON.stringify(updatedQuotes)); // Save the updated quotes to local storage
    }); // Add an event listener to the button to handle the delete action

    li.appendChild(span); // Append the span element to the list item
    li.appendChild(deleteBtn); // Append the button element to the list item
    li.classList.add("flex", "justify-between", "items-center", "gap-2"); // Add classes to the list item for styling
    ul.insertBefore(li, ul.firstChild);
  });
});
