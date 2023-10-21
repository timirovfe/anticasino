const menu = document.querySelector(".header-menu");
const menuItems = document.querySelectorAll(".header-link");
const hamburger= document.querySelector(".hamburger");
const body= document.querySelector("body");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        hamburger.classList.remove("open");
        body.style.overflow="inherit";
    } else {
        menu.classList.add("showMenu");
        hamburger.classList.add("open")
        body.style.overflow="hidden";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)