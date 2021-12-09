// Changes displayed portrait on intro page
let introImg = document.querySelector(".home-intro img");
function introImgChangeImg() {
    if (introImg.getAttribute("src") === "resources/portrait2.jpg") {
        
        introImg.setAttribute("src", "resources/portrait1.jpg");
    } else {
        introImg.setAttribute("src", "resources/portrait2.jpg");
    }
}

// Ne pas ajouter les () d'une fonction dans un addEventListener !!
introImg.addEventListener("click", introImgChangeImg);