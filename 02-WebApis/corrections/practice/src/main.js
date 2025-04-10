// select elements and create variables that you need to use for the code
// select header
const header = document.querySelector("header");
header.classList.add("bg-gray-300");
// header.classList.add("bg-blue-900", "text-white");
// select main
const main = document.querySelector("main");
main.classList.add("p-5");
// select footer
const footer = document.querySelector("footer");

// create a nav
const nav = document.createElement("nav");
nav.classList.add("flex", "justify-around");
// nav.className = "flex justify-around";

// create a logo with the text "Todo List"
const logo = document.createElement("div");
logo.textContent = "Todo List";

// create a ul and li elements for the navigation bar items
const items = ["home", "about", "contact"];
const ul = document.createElement("ul");
// ul.classList.add("flex", "justify-around", "w-2/3")
ul.classList.add("flex", "justify-center", "gap-10");

items.forEach((item) => {
  const li = document.createElement("li");
  li.id = item;
  const a = document.createElement("a");
  a.textContent = item;
  a.href = `#${item}`;
  // a.href = "#" + item;
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(logo);
nav.appendChild(ul);
header.appendChild(nav);

// create in main a list for our todos
// h1 "Todos"
const h1 = document.createElement("h1");
h1.textContent = "Todo List";
h1.classList.add("text-center", "text-2xl", "font-bold", "mt-10", "mb-3");
// ul list for the todos
const todoList = document.createElement("ul");

// create a function to create a li element and append it to the todoList
function createLiItem(item) {
  const li = document.createElement("li");
  li.textContent = `${item}`;
  li.classList.add("bg-gray-200", "p-2", "rounded", "mb-2", "w-1/2", "mx-auto");
  todoList.appendChild(li);
}

// fetch the todos from the "https://jsonplaceholder.typicode.com/todos" endpoint
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    data.slice(0,10).forEach((liItem) => createLiItem(liItem.title))

  })
  .catch((err) => console.log(err));
// li element for each todo
// append elements to the main element
main.appendChild(h1);
main.appendChild(todoList);

// const thenFetch = (callbackFunction) => {
//   const response = {
//     name: "hello",
//     age: 20,
//     address: "123 Main St",
//   };
//   return callbackFunction({
//     name: "hello",
//     age: 20,
//     address: "123 Main St",
//   });
// };

// const callbackFunction = (response) => {
//   console.log(response);
// };

// callbackFunction("hello");

// thenFetch(callbackFunction);
// create a footer with a paragraph and a link to the github repository
