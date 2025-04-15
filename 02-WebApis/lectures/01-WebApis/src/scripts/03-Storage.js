// Set data into localStorage
localStorage.setItem("name", "John Doe");
localStorage.setItem("age", 30);
localStorage.setItem("isStudent", false);

localStorage.setItem("hobbies", JSON.stringify(["singing", "running"]));


localStorage.setItem(
  "person",
  JSON.stringify({
    name: "John Doe",
    age: 30,
    hobbies: ["singing", "running"],
  })
);

localStorage.setItem(
  "todos",
  JSON.stringify([
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: true },
  ])
);

// retrieving data from localStorage
const name = localStorage.getItem("name");
console.log(name); // John Doe
const age = Number(localStorage.getItem("age"));
console.log(age); // 30

const isStudent = JSON.parse(localStorage.getItem("isStudent"));
console.log(isStudent); // false

const hobbies = JSON.parse(localStorage.getItem("hobbies"));
console.log(hobbies); // ["singing", "running"]

const person = JSON.parse(localStorage.getItem("person"));
console.log(person); // { name: "John Doe", age: 30, hobbies: ["singing", "running"] }

const todos = JSON.parse(localStorage.getItem("todos"));
console.log(todos); // [{ id: 1, title: "todo1", completed: false }, { id: 2, title: "todo2", completed: true }]


// removing data from localStorage
localStorage.removeItem("name");
localStorage.removeItem("age");
localStorage.removeItem("isStudent");

const newHobbies = hobbies.filter((hobby) => hobby == "singing");
console.log(newHobbies); // ["singing"]
localStorage.setItem("hobbies", JSON.stringify(newHobbies));

const newPerson = { ...person, age: 31 };
console.log(newPerson); // { name: "John Doe", age: 31, hobbies: ["singing", "running"] }
localStorage.setItem("person", JSON.stringify(newPerson));

const newTodos = todos.filter((todo) => todo.id !== 1);
console.log(newTodos); // [{ id: 2, title: "todo2", completed: true }]
localStorage.setItem("todos", JSON.stringify(newTodos));

// clear all data from localStorage
localStorage.clear();