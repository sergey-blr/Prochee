// Burger menu
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuCloseLine = document.querySelector('.menu__nave_close');
    const menulink = document.querySelectorAll('.menu__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('menu_active');

    })
    menuCloseLine.addEventListener('click', () => {
        menu.classList.remove('menu_active');

    });
    if (window.innerWidth <= 768) {
        for (let i = 0; i < menulink.length; i += 1) {
            menulink[i].addEventListener('click', () => {
                menu.classList.remove('menu_active');
            });
        }
    }
}());

// END BURGER    


// SEASON 

const portfolioBtns = document.querySelector('.portfolio__btns');
const portfolioBtn = document.querySelector('.portfolio__btn');
const portfolioImages = document.querySelectorAll('.portfolio__img');

function changeImage(event) {
    if (event.target.classList.contains('portfolio__btn')) {
        if (event.target.dataset.season === "winter") {
            portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`);
        } else if (event.target.dataset.season === "spring") {
            portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpg`);
        } else if (event.target.dataset.season === "summer") {
            portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpg`);
        } else if (event.target.dataset.season === "autumn") {
            portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpg`);
        }

    };

}
portfolioBtns.addEventListener('click', changeImage);



// /*Изменение темы*/

let switchMode = document.getElementById('toggle-theme-btn');
switchMode.onclick = function () {
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == '/css/light-mode.css') {
        theme.href = './css/style.css';
    } else {
        theme.href = '/css/light-mode.css';
    }
}


//                  смена языка
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
        'standart': 'Standart',
        'premium': 'Premium',
        'gold': 'Gold',
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
        'email': 'E-mail',
        'message': 'Message',
        'phone': 'Phone',
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
        'standart': 'Стандарт',
        'premium': 'Премиум',
        'gold': 'Золотой',
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
        'email': 'Почта',
        'message': 'Сообщение',
        'phone': 'Номер телефона',
        'send-message': 'Отправить'
    }
}

const elementsForTranslation = document.querySelectorAll('[data-i18n]');
const languageButtons = document.querySelectorAll('.language-button-switcher');

let language = 'en';

languageButtons.forEach(btn => btn.addEventListener('click', (element) => {
    if (element.target.id !== language) {
        setLanguage(element.target.id);
    }
}));

const setLanguage = (currentLanguage) => {
    elementsForTranslation.forEach(element => {
        element.textContent = i18Obj[currentLanguage][element.dataset.i18n];

        if (element.placeholder == 'E-mail') {
            element.placeholder = i18Obj[currentLanguage][element.dataset.i18n];
        } else if (element.placeholder == 'Phone') {
            element.placeholder = i18Obj[currentLanguage][element.dataset.i18n];
        } else if (element.placeholder == 'Message') {
            element.placeholder = i18Obj[currentLanguage][element.dataset.i18n];
        } else if (element.placeholder == 'Электронный адрес') {
            element.placeholder = i18Obj[currentLanguage][element.dataset.i18n];
        } else if (element.placeholder == 'Номер телефона') {
            element.placeholder = i18Obj[currentLanguage][element.dataset.i18n];
        } else if (element.placeholder == 'Сообщение') {
            element.placeholder = i18Obj[currentLanguage][element.dataset.i18n];
        }
    });


    language = currentLanguage;

    languageButtons.forEach(element => {
        if (element.id === currentLanguage) {
            element.checked = true;
        }
    });
}