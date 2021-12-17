// Click counter
let page = document.querySelector("html");
let myH3Counter = document.querySelector("h3.click-counter");
let clickCounter = 0;
page.onclick = function() {
    clickCounter++;
    myH3Counter.textContent = "This counter is incremented by JS: " + clickCounter;
};



