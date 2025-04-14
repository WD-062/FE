const todoList = document.getElementById("todo-list");

// fake data for testing
// this data will be replaced by the fetch call later
const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

// function to display the todos
const displayTodos = (todos) => {
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.title;
    li.classList.add(
      "mb-2",
      "p-2",
      "bg-gray-200",
      "rounded",
      "shadow-sm",
      "hover:bg-gray-300",
      "cursor-pointer"
    );
    li.id = todo.id;

    if (todo.completed) {
      li.classList.add("line-through", "bg-green-200");
    } else {
      li.classList.add("bg-red-200");
    }

    todoList.appendChild(li);
  });
};

// testing with the todos fake array
// displayTodos(todos);

// function to fetch todos from the API
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((todos) => {
//     console.log(todos);
//     displayTodos(todos.slice(0, 20));
//   })
//   .catch((err) => console.log(err));

// async funtion to fetch todos from the API
const fetchData = async (url, displayData) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    console.log(data);
    displayData(data.slice(0, 20));
  } catch (err) {
    console.log(err);
  }
};

fetchData(
  "https://jsonplaceholder.typicode.com/todos",
  displayTodos
);	