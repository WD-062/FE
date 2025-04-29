import { addStorage } from "../Storage/storage.js";

const createTitle = (text) => {
  const title = document.createElement("h1");
  title.textContent = text;
  title.classList.add("text-2xl", "font-bold", "mb-4");
  document.body.appendChild(title);
  //   return title;
};

const createListItem = (todo) => {
  const li = document.createElement("li");
  li.id = todo.id;
  li.textContent = todo.title;
  li.className = todo.completed
    ? "line-through text-gray-400"
    : "no-underline text-black";
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.classList.add("bg-red-400", "text-white", "rounded", "p-1", "ml-2");
  deletebtn.addEventListener("click", () => {
    const newTodos = todos.filter((todo) => todo.id !== Number(li.id));
    console.log(li.id);
    console.log(newTodos);
    addStorage("todos", newTodos);
    todos = newTodos;
    li.remove();
  });
  li.appendChild(deletebtn);
  return li;
};

// export default createTitle;
export { createTitle, createListItem };
