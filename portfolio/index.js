console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +48\n 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n 3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22\n total: 75 баллов');

/* global variable */
let theme = 'light';
let lang = 'en';

/* end global variable */

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

const winter = document.querySelector('.portfolio_winter')
const spring = document.querySelector('.portfolio_spring')
const summer = document.querySelector('.portfolio_summer')
const autumn = document.querySelector('.portfolio_autumn')

portfolioBtns.addEventListener('click', function changeImage(event) {
    if(event.target.classList.contains('portfolio_winter')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
        
        spring.classList.remove('active');
        summer.classList.remove('active');
        autumn.classList.remove('active');
        
        event.target.classList.add('active');
    }
    if(event.target.classList.contains('portfolio_spring')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
        
        winter.classList.remove('active');
        summer.classList.remove('active');
        autumn.classList.remove('active');

        event.target.classList.add('active');
    }
    if(event.target.classList.contains('portfolio_summer')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
        
        spring.classList.remove('active');
        winter.classList.remove('active');
        autumn.classList.remove('active');
        
        event.target.classList.add('active');
    }
    if(event.target.classList.contains('portfolio_autumn')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);

        summer.classList.remove('active');
        winter.classList.remove('active');
        spring.classList.remove('active');

        event.target.classList.add('active');
    }
});

/* end portfolio change image */

/* change theme */

const carbon = document.querySelector('.carbon');
const skills = document.querySelector('.skills');
const portfolio = document.querySelector('.portfolio');
const video = document.querySelector('.video');
const price = document.querySelector('.price');
const heading = document.querySelector('.heading');
const headings = document.querySelectorAll('.heading');
const discription_item = document.querySelector('.discription_item')
const discription_items = document.querySelectorAll('.discription_item')
const price_headings = document.querySelectorAll('.price_heading')
const price_item_descs = document.querySelectorAll('.price_item_desc')
const portfolioBtnAll = document.querySelectorAll('.bg_dark')



carbon.addEventListener('click', function switchTheme(event) {
    if(event.target.classList.contains('carbon')) {
        event.target.classList.toggle('carbon_light');
        skills.classList.toggle('light_theme');
        portfolio.classList.toggle('light_theme');
        video.classList.toggle('light_theme');
        price.classList.toggle('light_theme');
        headings.forEach((h2Heading) => h2Heading.classList.toggle('light_theme'));
        discription_items.forEach((pDesc) => pDesc.classList.toggle('light_theme'));
        price_headings.forEach((h3Price) => h3Price.classList.toggle('light_theme'));
        price_item_descs.forEach((pPrice) => pPrice.classList.toggle('light_theme'));
        portfolioBtnAll.forEach((btnPotfolio) => btnPotfolio.classList.toggle('light_theme'));
    }
})


/*  change theme */


