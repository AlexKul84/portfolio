const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }

  const english = document.querySelector('.english');
  const russian = document.querySelector('.russian');
  
  
  russian.addEventListener('click', function switchToRussian() {
      const e = document.querySelectorAll('[data-i18]')
      e.forEach((d) => d.textContent = i18Obj['ru'][d.dataset.i18])
  })

  english.addEventListener('click', function switchToRussian() {
    const e = document.querySelectorAll('[data-i18]')
    e.forEach((d) => d.textContent = i18Obj['en'][d.dataset.i18])
})


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


console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +48\n 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n 3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22\n total: 75 баллов');
