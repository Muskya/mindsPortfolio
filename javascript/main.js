// Checks for jQuery presence
if (jQuery) console.log("jQuery loaded");
else console.log("jQuery not loaded");

// Changes displayed portrait on intro page (static, no transition)
// let introImg = document.querySelector(".home-intro img");
// function introImgChangeImg() {
//     if (introImg.getAttribute("src") === "resources/portrait2.jpg") {
//         introImg.setAttribute("src", "resources/portrait1.jpg");
//     } else {
//         introImg.setAttribute("src", "resources/portrait2.jpg");
//     }
// }
// // Ne pas ajouter les () d'une fonction dans un addEventListener !!
// introImg.addEventListener("click", introImgChangeImg);

// jQuery fadeIn() fadeOut() essai (switch d'image à l'intro)
// .fadeOut|In( [duration (default 400ms)], []) 
$(document.querySelector(".home-intro img")).click(function() {
    $(".home-intro img").fadeOut(350, function() {
        if ($(this).attr("src") === "resources/portrait2.jpg")
            $(this).attr("src", "resources/portrait1.jpg").fadeIn();
        else 
             $(this).attr("src", "resources/portrait2.jpg").fadeIn();
    });
});