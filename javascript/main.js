/* document.addEventListener("DOMContentLoaded"..) :
Will wait for the HTML document to be fully parsed before
executing any Javascript the anonymous function contains.
It is not needed if "defer" attribute is mentionned when linking .js files */
document.addEventListener("DOMContentLoaded", () => {
    // code after HTML fully parsed and loaded ..
});

/* SOME PRACTICE : */

// Click counter
let page = document.querySelector("html");
let myH3Counter = document.querySelector("h3");
let clickCounter = 0;
page.onclick = function() {
    clickCounter++;
    myH3Counter.textContent = "This counter is incremented by JS: " + clickCounter;
    console.log(clickCounter);
};

// Paragraphs' text update on click
let paragraphs = document.querySelectorAll("p");
for (const p of paragraphs) {
    p.onclick = function() {
        p.textContent = "Just clicked on a paragraph !";
    };
}



