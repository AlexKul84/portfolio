console.log('1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n - <header>, <main>, <footer> +2\n - шесть элементов <section> (по количеству секций) +2\n - только один заголовок <h1> +2 \n - пять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2\n - один элемент <nav> (панель навигации) +2\n - два списка ul > li > a (панель навигации, ссылки на соцсети) +2\n - десять кнопок <button> +2\n - два инпута: <input type="email"> и <input type="tel"> +2\n - один элемент <textarea> +2\n - три атрибута placeholder +2\n 3. Вёрстка соответствует макету +48\n - блок <header> +6\n - секция hero +6\n - секция skills +6 \n -секция portfolio +6\n - секция video +6\n - секция price +6\n - секция contacts +6\n - блок <footer> +6\n 4. Требования к css + 12\n - для построения сетки используются флексы +2\n - при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n - фоновый цвет тянется на всю ширину страницы +2\n - иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n - изображения добавлены в формате .jpg +2\n - есть favicon +2\n 5.Интерактивность, реализуемая через css +20\n - плавная прокрутка по якорям +5\n - ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n - интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета шрифта. При вёрстке указаны стили при наведении на ссылку или кнопку, указанные в макете +5\n - добавлерно плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы (добавлено свойство transition: .5s) +5\n Итого: 100 баллов')

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