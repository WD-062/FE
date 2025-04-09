// You can work here or download the template
// Array of 10 random tasks as strings
const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];

const addBtn = document.getElementById("add-item-btn");
const alertBtn = document.getElementById("alert-btn");
const consoleBtn = document.getElementById("console-btn");
const list = document.getElementById("item-list");

// event addBtn

const addTask = () => {
  const li = document.createElement("li");
  li.textContent = tasks[Math.floor(Math.random() * tasks.length)];
  list.appendChild(li);
  list.scrollTop = list.scrollHeight; // Scroll to the bottom of the list
};

const consoleTask = () => {
  console.log("Task added to the list");
};

const alertTask = () => {
  alert("Task added to the list");
};


addBtn.addEventListener("click", addTask);
consoleBtn.addEventListener("click", consoleTask);
alertBtn.addEventListener("click", alertTask);
