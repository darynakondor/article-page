const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const line_1 = document.querySelector(".line-1");
const line_2 = document.querySelector(".line-2");
const line_3 = document.querySelector(".line-3");
const border = document.querySelector(".border");
iconMenu.addEventListener("click", function() {
    menu.classList.toggle("menu-block");
    document.body.classList.add("overfl-hid");
    line_1.classList.toggle("active-l-1");
    line_2.classList.toggle("active-l-2");
    line_3.classList.toggle("active-l-3");
    border.classList.toggle("border");
});