// script.js
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('nav-active');
});
