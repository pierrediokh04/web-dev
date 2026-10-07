// TODO 1 — Change the text of the h1 (#title) to "JavaScript changed me!"
const title = document.querySelector("#title");
title.textContent= "JavaScript changed me!"

// TODO 2 — Change the text of the paragraph with class "intro" to
// "This sentence was changed by app.js."  (careful: . for a class, # for an id)
const para = document.querySelector(".intro");
para.textContent = "This sentence was changed by app.js"

// TODO 3 — Make the link (#link) point to https://developer.mozilla.org
// and change its text to "Go to MDN".
const newlink = document.querySelector("#link");
newlink.href = "https://developer.mozilla.org";
newlink.textContent= "Go to MDN"

// TODO 4 — Add the class "highlight" to the box (classList),
// and give it rounded corners with style.borderRadius = "12px".
const box = document.querySelector(".box");
box.classList.add("highlight") 
box.style.borderRadius = "12px"

// TODO 5 — Read the value of #nameField and write "Hello, Awa!" in #output.
// (It must use the field's value: change value="A
const namefield = document.querySelector("#namefield");
const output = document.querySelector("#output");

output.textContent = `hello, ${namefield.value}!`;