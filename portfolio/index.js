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

const portfolioBtnAll = document.querySelectorAll('portfolio_btn')

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

/* change button */

//1.
/////////////////////////////////////////////////////////////////

// const portfolioWinter = document.querySelector('.portfolio_winter');

// portfolioWinter.addEventListener('click', function changeButton() {
//     portfolioWinter.style.backgroundColor = '#bdae82';
//     portfolioWinter.style.color = '#000';
// })

// const portfolioSpring = document.querySelector('.portfolio_spring');

// portfolioSpring.addEventListener('click', function changeButton() {
//     portfolioSpring.style.backgroundColor = '#bdae82';
//     portfolioSpring.style.color = '#000';
// })

//2.
//////////////////////////////////////////////////////////////////

// const portfolioBtn = document.querySelector('.portfolio_btn');

// function toggleBtn() {
//     portfolioBtn.classList.toggle('active');
// }
// portfolioBtn.addEventListener('click', toggleBtn);

//3.
///////////////////////////////////////////////////////////////////

// 

// function removeClassActive(event) {
//     if(event.target.classList.contains('portfolio_btn')) {
//         portfolioBtnAll.forEach((btn) => btn.classList.remove('active'));
//     }
// };

// function addClassActive(event) {
//     if(event.target.classList.contains('portfolio_btn')) {
//         event.target.classList.add('active');
//     }
// };

// portfolioBtns.addEventListener('click', addClassActive)



/* end change button */

/* change theme */

const carbon = document.querySelector('.carbon');
const skills = document.querySelector('.skills');
const portfolio = document.querySelector('.portfolio');
const video = document.querySelector('.video');
const price = document.querySelector('.price');
const heading = document.querySelector('.heading');
const discription_item = document.querySelector('.discription_item')


carbon.addEventListener('click', function swithTheme(event) {
    if(event.target.classList.contains('carbon')) {
        event.target.classList.toggle('carbon_light');
        skills.classList.toggle('light_theme');
        portfolio.classList.toggle('light_theme');
        video.classList.toggle('light_theme');
        price.classList.toggle('light_theme');
        heading.classList.toggle('light_theme');
        discription_item.classList.toggle('light_theme');
    }
})


/* change theme */