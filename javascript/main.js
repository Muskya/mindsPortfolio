// Checks for jQuery presence
if (jQuery) console.log("jQuery loaded");
else console.log("jQuery not loaded");

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