console.log(document);
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const ul = document.querySelector("ul");
// selecting single elements
const listItem = document.querySelector("#item1");
const listItem2 = document.getElementById("item2");
console.log(listItem);
// console.log(listItem2);

// selecting multiple elements
const listItems = document.querySelectorAll("li");
const htmlCollection = document.getElementsByTagName("li");
const listItems2 = document.getElementsByClassName("list-item");
// console.log(listItems); // NodeList
// console.log(htmlCollection); // HTMLCollection
// console.log(listItems2); // HTMLCollection

//change style
body.style.backgroundColor = "lightblue";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";

console.log(h1.classList);
h1.classList.add("font-extrabold", "text-3xl", "text-white", "mb-4");
h1.classList.remove("text-3xl");
console.log(h1.classList);

const createListItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

const items = ["Item 4", "Item 5", "Item 6"];

items.forEach((item) => createListItem(item));





// const li = document.createElement("li");
// const a = document.createElement("a");
// a.textContent = "Item 4";
// a.href = "#";
// a.classList.add("list-item", "text-blue-500", "hover:text-blue-700", "font-bold", "text-lg");
// li.appendChild(a);
// ul.appendChild(li);

