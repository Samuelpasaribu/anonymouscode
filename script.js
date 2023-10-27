// Get the button element
var backButton = document.getElementById("back-to-top-button");

// Show the button when the user scrolls down 300px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
};

// Scroll to the top of the document smoothly when the button is clicked
backButton.addEventListener("click", function() {
    scrollToTop(1000); // Adjust the scroll duration (in milliseconds) as needed
});

// Function to smoothly scroll to the top of the document
function scrollToTop(duration) {
    const start = performance.now();
    const startY = window.pageYOffset;
    const distance = -startY;
    const easing = function(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    function step(currentTime) {
        const elapsedTime = currentTime - start;
        if (elapsedTime < duration) {
            window.scrollTo(0, startY + distance * easing(elapsedTime / duration));
            requestAnimationFrame(step);
        } else {
            window.scrollTo(0, startY + distance);
        }
    }

    requestAnimationFrame(step);
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    var iconHome = document.getElementById("icon-home");

    if (x.className === "topnav") {
        x.className += " responsive";
        // Ubah ikon menjadi close ketika menu terbuka
        iconHome.innerHTML = '<path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59 5.59-5.59z" fill="white"></path>';
    } else {
        x.className = "topnav";
        // Kembalikan ikon ke ikon home ketika menu ditutup
        iconHome.innerHTML = '<path d="M1 17h22v2h-22v-2zm0-12v2h22v-2h-22zm0 8h22v-2h-22v2z" fill="white"></path>';
    }
}
