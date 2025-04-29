// function for creating the list element
import { deleteQuote } from "./storage.js";

const createQuoteElement = (quote) => {
  const li = document.createElement("li"); // Create a new list item
  li.id = quote.id; // Set the id of the list item to the quote id
  const span = document.createElement("span"); // Create a new span element
  span.textContent = quote.text; // Set the text content of the span element to "the userInput

  const deleteBtn = document.createElement("button"); // Create a new button element
  deleteBtn.textContent = "Delete"; // Set the text content of the button to "Delete"
  deleteBtn.classList.add("delete"); // Add a class to the button for styling
  deleteBtn.addEventListener("click", () => {
    li.remove();
    deleteQuote(li, quote);
  }); // Add an event listener to the button to handle the delete action

  li.appendChild(span); // Append the span element to the list item
  li.appendChild(deleteBtn); // Append the button element to the list item
  li.classList.add("flex", "justify-between", "items-center", "gap-2"); // Add classes to the list item for styling
  return li;
};

export { createQuoteElement };
