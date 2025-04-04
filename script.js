var slideIndex = 0;
carousel();

// Function to control carousel (auto and manual)
function carousel(click = 0) {
    let slides = document.getElementsByClassName("mySlides");

    // Hide all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        slides[i].style.display = "hidden";
    }

    if (click === 0) {
        // Auto mode
        slideIndex++;
        if (slideIndex >= slides.length) { 
            slideIndex = 0; 
        }
    } else if (click === 1) {
        // Forward click
        slideIndex++;
        if (slideIndex >= slides.length) { 
            slideIndex = 0; 
        }
    } else {
        // Backward click
        slideIndex--;
        if (slideIndex < 0) { 
            slideIndex = slides.length - 1; 
        }
    }

    // Show the correct image
    slides[slideIndex].style.display = "block";
    slides[slideIndex].style.opacity = 1;

    // Auto-transition every 3 seconds if not manually clicked
    if (click === 0) {
        setTimeout(carousel, 4000);
    }
}

// var images = [
//     "url('../pictures/Bubbles.png')",
//     "url('../pictures/Bubbles2.png')",
//     "url('../pictures/Bubbles3.png')"
// ];

// function setRandomBackground() {
//     var randomIndex = Math.floor(Math.random() * images.length);
//     var randomImage = images[randomIndex];
//     console.log("Setting background");
//     var aboutMe = document.getElementById("aboutMe");
//     console.log(aboutMe);
//     aboutMe.style.backgroundImage = randomImage;
// }

// window.onload = setRandomBackground;