import * as clearContentDiv from "./clearContentDiv.js";
import * as home from "./home.js";
import * as menu from "./menu.js";
import * as about from "./about.js"

import "./styles.css"

console.log("index.js: Hello World")

// Load into home on visit
home.load();

// Query for the nav buttons
const navHomeBtn = document.querySelector("button#navHome");
const navMenuBtn = document.querySelector("button#navMenu");
const navAboutBtn = document.querySelector("button#navAbout");

// Add event listeners to the nav bar's tab buttons.
navHomeBtn.addEventListener("click", () => {
    clearContentDiv.clear();
    home.load();
});

navMenuBtn.addEventListener("click", () => {
    clearContentDiv.clear();
    menu.load();
});

navAboutBtn.addEventListener("click", () => {
    clearContentDiv.clear();
    about.load();
});