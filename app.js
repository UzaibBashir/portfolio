function login(){
    alert("Login functionality is under development.");
}

// Typing Animation - Removed old logic

function Menu(e){
    let list = document.querySelector("ul");
    e.name === "menu-outline" ? (e.name = "close",list.classList.add("top-[80px]") , list.classList.add("opacity-100")) :( e.name = "menu-outline",list.classList.remove("top-[80px]"),list.classList.remove("opacity-100"))
}

function downloadCV(){
    alert("CV download is not yet implemented.");
}




document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Contact form submission is not yet implemented.");
});




const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backToTopButton.classList.add("opacity-100", "visible");
    } else {
        backToTopButton.classList.remove("opacity-100", "visible");
    }
});
backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});




document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});






// New Typing Animation
const targetElement = document.getElementById("animated-text-target");
const originalText = targetElement.innerHTML;
const phrases = [
    "Well I am an Artist working to<br>make world a better place<br><span class=\"font-semibold\">Know more about me below. ⬇️</span>",
    "I am in love with Computer Sciences.<br>and it loves me back much more.<br><span class=\"font-semibold\">Check out my projects. ⬇️</span>",
    "Always exloring and learning.<br>Passionate about new technologies.<br><span class=\"font-semibold\">See my skills. ⬇️</span>"
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        targetElement.innerHTML = currentPhrase.substring(0, charIndex--);
    } else {
        targetElement.innerHTML = currentPhrase.substring(0, charIndex++);
    }

    let typeSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === currentPhrase.length + 1) {
        typeSpeed = 1500; // Pause at end of typing
        isDeleting = true;
    } else if (isDeleting && charIndex === -1) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before typing next phrase
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    targetElement.innerHTML = ""; // Clear initial content
    setTimeout(typeEffect, 1000);
});


