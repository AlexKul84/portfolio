console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +48\n 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n 3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22\n total: 75 баллов');

const hamburger = document.querySelector('.hamburger');
const menu_list = document.querySelector('.menu_list');

function toggleMenu() {
    hamburger.classList.toggle('open');
    menu_list.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.nav_link');

function closeMenu(event) {
    if (event.target.classList.contains('nav_link')) {
        hamburger.classList.remove('open')
        menu_list.classList.remove('open')
    }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));