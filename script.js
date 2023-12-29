const button = document.querySelector(".button");
const mobileMenu = document.querySelector(".mobile-menu");
var elements = document.querySelectorAll(".mobile_nav_elements");
let isMenuOpen = false;  // Flag to track menu state

function toggleMenu() {
  if (isMenuOpen) {
    // If menu is open, force hide it without animation
    mobileMenu.classList.toggle("show-out");
    mobileMenu.style.transform = "translateX(-110%)";  // Set initial position
    mobileMenu.style.opacity = "0";
    isMenuOpen = false;
  } else {
    // If menu is closed, toggle the "show" class for animation
    mobileMenu.classList.toggle("show");
    isMenuOpen = true;
  }
}

button.addEventListener("click", toggleMenu);
elements.forEach(element => {
  element.addEventListener("click" ,toggleMenu );
});

