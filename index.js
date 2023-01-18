const modalWindow = document.querySelector(".menu");
const navMenu = document.querySelector(".modal_menu");
let statusMenu = true;
modalWindow.addEventListener("click", () => {
    statusMenu = !statusMenu;
    if (statusMenu === false) {
        navMenu.classList.remove("vision");

    } else {
        navMenu.classList.add("vision");
    };
});

const modalMenu = document.querySelector(".modal_menu");
modalMenu.addEventListener("click", () => {
    const { target } = event;
    if (target.hasAttribute("href") === true) {
        statusMenu = !statusMenu;
        navMenu.classList.add("vision");
    };
});