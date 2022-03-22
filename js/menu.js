const navToggle = document.querySelector(".header__nav-toggle");
const list = document.querySelector(".header__list");
const links = document.querySelectorAll(".header__links");
const logo = document.querySelector(".header__logo");

logo.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

navToggle.addEventListener("click", () => {
    list.classList.toggle("header__links--show");
});

links.forEach( link => {
    link.addEventListener("click", () =>{
        list.classList.remove("header__links--show");   
    });
});