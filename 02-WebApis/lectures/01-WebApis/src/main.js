// elements selected from the DOM
const ul = document.querySelector("ul");

// create variables that will store the data for your program
let todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);

const createListItem = (todo) => {
  const li = document.createElement("li");
  li.id = todo.id;
  li.className = todo.completed
    ? "line-through text-gray-400"
    : "no-underline text-black";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.classList.add("mr-2", "cursor-pointer");

  checkbox.addEventListener("click", () => {
    todo.completed = !todo.completed;
    li.className = todo.completed
      ? "line-through text-gray-400"
      : "no-underline text-black";
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const span = document.createElement("span");
  span.textContent = todo.title;

  const button = document.createElement("button");
  button.textContent = "Delete";
  button.classList.add("bg-red-400", "text-white", "rounded", "p-1", "ml-2");
  button.addEventListener("click", () => {
    // const index = todos.findIndex((t) => t.id === todo.id);
    // if (index !== -1) {
    //   todos.splice(index, 1);
    //   localStorage.setItem("todos", JSON.stringify(todos));
    // }
    const newTodos = todos.filter((todo) => todo.id !== Number(li.id));
    console.log(li.id);
    console.log(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    todos = newTodos;
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
};

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    // save the data to local storage
    if (todos.length === 0) {
      localStorage.setItem("todos", JSON.stringify(data.slice(0, 20)));
      data.slice(0, 20).forEach((todo) => createListItem(todo));
    }
  })
  .catch((error) => console.log(error));

todos.forEach((todo) => createListItem(todo));
