import { createTitle, createListItem } from "./UI/ui.js";
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  console.log("Hello World");
  const li = createListItem({ id: 1, title: "Hello World" });
  console.log(li);
  ul.appendChild(li);
});

createTitle("Hello World");
