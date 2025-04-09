// Create header
const header = document.createElement("header");
header.classList.add("header");

const nav = document.createElement("nav");
nav.classList.add("nav");

const logo = document.createElement("a");
logo.href = "#";
logo.textContent = "Coffee Shop";
logo.classList.add("logo");

const navLinks = ["Home", "Menu", "About", "Contact"];
const navList = document.createElement("ul");
navList.classList.add("nav-list");

navLinks.forEach((link) => {
  const li = document.createElement("li");
  li.classList.add("nav-item");
  const a = document.createElement("a");
  a.textContent = link;
  a.href = "#";
  a.classList.add("nav-link");
  a.addEventListener("mouseover", () => {
    a.style.textDecoration = "underline";
  });
  a.addEventListener("mouseout", () => {
    a.style.textDecoration = "none";
  });
  li.appendChild(a);
  navList.appendChild(li);
});

nav.appendChild(logo);
nav.appendChild(navList);
header.appendChild(nav);
document.body.appendChild(header);

// Create hero section
const hero = document.createElement("section");
// hero.className = "hero";
hero.classList.add("hero");
const heroContent = document.createElement("div");
heroContent.classList.add("hero-content");

const heroTitle = document.createElement("h1");
heroTitle.textContent = "Welcome to Our Coffee Shop";
heroTitle.classList.add("hero-title");

const heroText = document.createElement("p");
heroText.textContent = "Enjoy the best coffee in town.";
heroText.classList.add("hero-text");

const heroButton = document.createElement("a");
heroButton.textContent = "Explore Our Menu";
heroButton.href = "#menu";
heroButton.classList.add("hero-button");

heroContent.appendChild(heroTitle);
heroContent.appendChild(heroText);
heroContent.appendChild(heroButton);
hero.appendChild(heroContent);
document.body.appendChild(hero);

// Creating footer

const footer = document.createElement("footer");
footer.classList.add("footer");

const footerText = document.createElement("p");
footerText.textContent = "© 2024 Coffee Shop. All rights reserved.";
footerText.classList.add("footer-text");

footer.appendChild(footerText);
document.body.appendChild(footer);

// Adding styles

// header styles
header.style.backgroundColor = "#fff";
header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
header.style.padding = "1rem 0rem";
// Nav styles
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.maxWidth = "1200px";
nav.style.margin = "0 auto";
nav.style.padding = "0 1rem";

// Logo styles
logo.style.fontSize = "1.5rem";
logo.style.fontWeight = "bold";
logo.style.color = "#333";
logo.style.textDecoration = "none";

// Nav-list styles
navList.style.display = "flex";
navList.style.listStyle = "none";

// Nav-item styles
document.querySelectorAll(".nav-item").forEach((navItem) => {
  navItem.style.marginLeft = "1.5rem";
});

// Nav-link styles
document.querySelectorAll(".nav-item a").forEach((navLink) => {
  navLink.style.textDecoration = "none";
  navLink.style.color = "#333";
  navLink.style.fontWeight = "bold";
});

// Hero styles
hero.style.height = "560px";
hero.style.background =
  'url("https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1") no-repeat center center/cover';
hero.style.color = "#fff";

// Hero-content styles
heroContent.style.maxWidth = "600px";
heroContent.style.height = "100%";
heroContent.style.display = "flex";
heroContent.style.flexDirection = "column";
heroContent.style.justifyContent = "space-around";
heroContent.style.alignItems = "center";
heroContent.style.textAlign = "center";

// Hero-heading styles
heroTitle.style.fontSize = "2.5rem";
heroTitle.style.marginBottom = "1rem";

// Hero-text styles
heroText.style.fontSize = "1.2rem";
heroText.style.marginBottom = "2rem";

// Button styles
heroButton.style.backgroundColor = "#333";
heroButton.style.color = "#fff";
heroButton.style.padding = "0.75rem 1.5rem";
heroButton.style.textDecoration = "none";
heroButton.style.borderRadius = "5px";
heroButton.style.transition = "background-color 0.3s ease";

heroButton.addEventListener("mouseover", () => {
  heroButton.style.backgroundColor = "#555";
});
heroButton.addEventListener("mouseout", () => {
  heroButton.style.backgroundColor = "#333";
});

// Footer styles
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "1rem 0";
footer.style.marginTop = "auto";
