const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const ul = document.querySelector("ul");

console.log(fetch("https://jsonplaceholder.typicode.com/todos"));

const createListItem = (todo) => {
  const li = document.createElement("li");
  li.textContent = todo.title;
  li.id = todo.id;
  li.className = todo.completed ? "completed" : "incompleted";
  ul.appendChild(li);
};

// const fetchData = (data) => {
//   console.log(data)
//   data.slice(0,10).forEach((todo) => createListItem(todo));
// }

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.slice(0, 10).forEach((todo) => createListItem(todo));
  })
  .catch((error) => console.log(error));

//  fetch().then().then().catch().finally();