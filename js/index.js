const elHamburgerBtn = document.querySelector(".header__burger");
const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', () => {
    elHeader.classList.toggle("header--open");
})