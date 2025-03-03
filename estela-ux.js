function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
