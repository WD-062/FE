const addQuote = (quote) => {
  const quotes = JSON.parse(localStorage.getItem("quotes")) || [];
  quotes.push({ id: quote.id, text: quote.text }); // Add the new quote to the array
  localStorage.setItem("quotes", JSON.stringify(quotes)); // Save the array to local storage
};

const getQuotes = () => {
  const quotes = JSON.parse(localStorage.getItem("quotes")) || []; // Get the quotes from local storage
  return quotes; // Return the quotes
};

const deleteQuote = (li, quote) => {
  const quotes = JSON.parse(localStorage.getItem("quotes")) || []; // Get the quotes from local storage
  const updatedQuotes = quotes.filter((quote) => quote.id != li.id); // Filter out the deleted quote
  localStorage.setItem("quotes", JSON.stringify(updatedQuotes)); // Save the updated quotes to local storage
}; // Function to delete a quote

export { addQuote, getQuotes, deleteQuote };
