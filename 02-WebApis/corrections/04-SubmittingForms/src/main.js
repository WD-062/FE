const form = document.getElementById("contact-form");
const outputP = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  // get fields values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate fields

  //   if (name === "" || email === "" || message === "") {
  //     outputP.textContent = "Please fill in all fields.";
  //     return;
  //   }

  if (!name || !email || !message) {
    outputP.textContent = "Please fill in all fields.";
    outputP.style.color = "red";
    return;
  } 

  const ul = document.createElement("ul");

  const liName = document.createElement("li");
  liName.textContent = `Name: ${name}`;

  const liEmail = document.createElement("li");
  liEmail.textContent = `Email: ${email}`;

  const liMessage = document.createElement("li");
  liMessage.textContent = `Message: ${message}`;

  ul.appendChild(liName);
  ul.appendChild(liEmail);
  ul.appendChild(liMessage);
  outputP.appendChild(ul);
  outputP.style.color = "black";

  // Clear the form fields
  form.reset();
});
