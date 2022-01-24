console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +48\n 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n 3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22\n total: 75 баллов');

/* hamburger menu */

const hamburger = document.querySelector('.hamburger');
const hamburger_menu = document.querySelector('.hamburger_menu');
const menu_container = document.querySelector('.menu_container');

function toggleMenu() {
    hamburger.classList.toggle('open');
    hamburger_menu.classList.toggle('open');
    menu_container.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.nav_link');

function closeMenu(event) {
    if (event.target.classList.contains('nav_link')) {
        hamburger.classList.remove('open')
        hamburger_menu.classList.remove('open')
        menu_container.classList.remove('open')
    }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));

/* end hamburger menu */

/* portfolio change image */

const portfolioBtns = document.querySelector('.portfolio_btns');

const portfolioImages = document.querySelectorAll('.image');

portfolioBtns.addEventListener('click', (event) => {
    if(event.target.classList.contains('portfolio_winter')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
    }
    if(event.target.classList.contains('portfolio_spring')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
    }
    if(event.target.classList.contains('portfolio_summer')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
    }
    if(event.target.classList.contains('portfolio_autumn')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
    }
});

/* end portfolio change image */