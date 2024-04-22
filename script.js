const iconMenu = document.getElementById("icon-menu");
const iconClose = document.getElementById("icon-close");

const main = document.getElementById("main");

const ulClose = document.querySelector(".ul-close");

const openMenu = () => {
    ulClose.style.display = "block";
    main.style.background = "rgb(252, 251, 251)";
}

const closeMenu = () => {
    ulClose.style.display = "none";
    main.style.background = "white";
}

iconMenu.addEventListener("click", openMenu)
iconClose.addEventListener("click", closeMenu)