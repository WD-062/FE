// Selecting elements from the DOM
const form = document.querySelector("form");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
let tasks = JSON.parse(localStorage.getItem("todos")) || [];

// Fetch the information from the API "https://jsonplaceholder.typicode.com/todos"
// Store the information in the localstorage
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    // creating a todos variable and we are going to store the array with the first 10 items
    const todos = data.slice(0, 10).map((item) => {
      return {
        userId: item.userId,
        id: item.id,
        title: item.title,
        completed: false,
      };
    });
    // Store the information in the localstorage
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });

// Display the information in the loclalstorage in the HTML page

// function
// Create li element
// li styling with classlist.add()
// give an id to the li element
// create span
// insert item.title
// create a button
// style the button with classlist.add()
// add text "delete" to the button
// add an event listener to the button
// append li to ul
// append span to li
// append button to li

// const todo = {
//   userId: 1,
//   id: 1,
//   title: "delectus aut autem",
//   completed: false,
// };

function displayTodo(todo) {
  const li = document.createElement("li");
  li.classList.add("bg-gray-200", "rounded", "p-2", "mb-2", "flex", "items-center");
  li.id = `${todo.id}`;
  const span = document.createElement("span");
  span.textContent = todo.title;
  const button = document.createElement("button");
  button.textContent = "delete";
  button.classList.add("bg-red-500", "rounded", "p-1", "text-white", "ml-2");
  button.addEventListener("click", () => {
    console.log("delete button clicked");
    li.remove();
  });
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
}

// displayTodo(todo);


// Create a forEach for the tasks array to display the todos

tasks.forEach((task) => {
  displayTodo(task);
}) 