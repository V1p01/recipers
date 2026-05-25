// Данные о рецептах
const recipesData = {
    'lazy-vareniki': {
        title: 'Ленивые вареники',
        emoji: '🥞',
        time: '10 минут',
        price: '~80₽',
        difficulty: 'Легко',
        ingredients: [
            'Творог - 500 г',
            'Яйцо - 1 шт',
            'Мука - 5 ст. ложек',
            'Сахар - 2 ст. ложки',
            'Соль - щепотка',
            'Сливочное масло - для подачи'
        ],
        instructions: [
            'Смешайте творог с яйцом, сахаром и солью',
            'Добавьте муку и замесите мягкое тесто',
            'Раскатайте колбаски и нарежьте кусочками',
            'Варите в кипящей воде 2-3 минуты после всплытия',
            'Подавайте со сметаной или вареньем'
        ],
        tip: '💡 Не добавляйте слишком много муки, иначе вареники будут жесткими. Тесто должно слегка липнуть к рукам.'
    },
    'tuna-pasta': {
        title: 'Паста с тунцом',
        emoji: '🍝',
        time: '20 минут',
        price: '~150₽',
        difficulty: 'Средне',
        ingredients: [
            'Макароны - 250 г',
            'Консервированный тунец - 1 банка',
            'Томатная паста - 2 ст. ложки',
            'Лук - 1 шт',
            'Чеснок - 2 зубчика',
            'Оливковое масло - 2 ст. ложки',
            'Соль, перец - по вкусу'
        ],
        instructions: [
            'Отварите макароны до состояния al dente',
            'Обжарьте мелко нарезанный лук и чеснок',
            'Добавьте томатную пасту и тунец, перемешайте',
            'Тушите соус 5-7 минут',
            'Смешайте с макаронами и прогрейте вместе'
        ],
        tip: '💡 Сохраните немного воды от макарон. Если соус получится густым, добавьте эту воду для лучшей консистенции.'
    },
    'rice-veggies': {
        title: 'Рис с овощами',
        emoji: '🍚',
        time: '25 минут',
        price: '~100₽',
        difficulty: 'Легко',
        ingredients: [
            'Рис - 1 стакан',
            'Замороженные овощи - 300 г',
            'Соевый соус - 2 ст. ложки',
            'Яйцо - 2 шт (по желанию)',
            'Растительное масло - 2 ст. ложки',
            'Соль, специи - по вкусу'
        ],
        instructions: [
            'Отварите рис до готовности',
            'На сковороде обжарьте замороженные овощи 5-7 минут',
            'Добавьте рис и соевый соус, перемешайте',
            'По желанию добавьте яйца и обжарьте до готовности',
            'Приправьте специями по вкусу'
        ],
        tip: '💡 Используйте рис, сваренный заранее и охлажденный - так блюдо получится более рассыпчатым.'
    },
    'potato-casserole': {
        title: 'Картофельная запеканка',
        emoji: '🥔',
        time: '30 минут',
        price: '~180₽',
        difficulty: 'Средне',
        ingredients: [
            'Картофель - 6-7 шт',
            'Сосиски - 4 шт',
            'Сыр - 150 г',
            'Яйца - 2 шт',
            'Молоко - 100 мл',
            'Соль, перец - по вкусу'
        ],
        instructions: [
            'Нарежьте картофель тонкими кружочками',
            'Выложите слоями картофель и нарезанные сосиски',
            'Залейте смесью яиц и молока',
            'Посыпьте тертым сыром',
            'Запекайте при 180°C 25-30 минут до золотистой корочки'
        ],
        tip: '💡 Чтобы картофель пропекся быстрее, можно предварительно отварить его до полуготовности.'
    },
    'hot-sandwiches': {
        title: 'Горячие бутерброды',
        emoji: '🥪',
        time: '5 минут',
        price: '~60₽',
        difficulty: 'Легко',
        ingredients: [
            'Хлеб - 4 куска',
            'Сыр - 100 г',
            'Колбаса/ветчина - 100 г',
            'Помидор - 1 шт',
            'Майонез или кетчуп - по вкусу',
            'Зелень - для украшения'
        ],
        instructions: [
            'Смажьте хлеб соусом',
            'Выложите начинку: колбасу, помидоры',
            'Сверху положите сыр',
            'Разогрейте в микроволновке 1-2 минуты',
            'Украсьте зеленью и подавайте'
        ],
        tip: '💡 Чтобы бутерброды не размокли, кладите соус между слоями начинки, а не на сам хлеб.'
    },
    'eggs-tomatoes': {
        title: 'Яичница с помидорами',
        emoji: '🍳',
        time: '7 минут',
        price: '~50₽',
        difficulty: 'Легко',
        ingredients: [
            'Яйца - 3 шт',
            'Помидор - 1 шт',
            'Лук - 1/2 шт',
            'Растительное масло - 1 ст. ложка',
            'Соль, перец - по вкусу',
            'Зелень - по желанию'
        ],
        instructions: [
            'Обжарьте нарезанный лук до золотистости',
            'Добавьте нарезанный помидор, жарьте 2 минуты',
            'Разбейте яйца прямо на сковороду',
            'Жарьте на среднем огне до желаемой готовности',
            'Посолите, поперчите и посыпьте зеленью'
        ],
        tip: '💡 Для более нежной яичницы накройте сковороду крышкой на 1-2 минуты в конце приготовления.'
    }
};

// Мобильное меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Анимация гамбургера
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Закрытие меню при клике на ссылку
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Активная ссылка при скролле
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Фильтрация рецептов
const filterButtons = document.querySelectorAll('.filter-btn');
const recipeCards = document.querySelectorAll('.recipe-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс нажатой кнопке
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        recipeCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
                card.style.animation = 'scaleIn 0.6s ease';
            } else {
                if (card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'scaleIn 0.6s ease';
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// Открытие модального окна с рецептом
function openRecipe(recipeId) {
    const modal = document.getElementById('recipeModal');
    const recipeDetails = document.getElementById('recipeDetails');
    const recipe = recipesData[recipeId];
    
    if (recipe) {
        const detailsHTML = `
            <div style="text-align: center; font-size: 4rem; margin-bottom: 1rem;">${recipe.emoji}</div>
            <h2>${recipe.title}</h2>
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: #666;">
                <span>⏱️ ${recipe.time}</span>
                <span>💰 ${recipe.price}</span>
                <span>📊 ${recipe.difficulty}</span>
            </div>
            
            <h3>📝 Ингредиенты:</h3>
            <ul>
                ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
            </ul>
            
            <h3>👨‍🍳 Приготовление:</h3>
            <ol style="padding-left: 1.2rem; line-height: 2;">
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: #f9f9f9; border-radius: 10px;">
                <p>${recipe.tip}</p>
            </div>
        `;
        
        recipeDetails.innerHTML = detailsHTML;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Закрытие модального окна
const modal = document.getElementById('recipeModal');
const closeModal = document.querySelector('.close-modal');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Закрытие по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Анимация появления карточек при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'scaleIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.recipe-card, .tip-card').forEach(card => {
    observer.observe(card);
});

// Эффект параллакса для плавающих элементов
document.addEventListener('mousemove', (e) => {
    const elements = document.querySelectorAll('.floating-element');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    elements.forEach((element, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Анимация счетчиков статистики
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = stat.textContent;
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            stat.style.transition = 'all 0.6s ease';
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }, 200);
    });
}

// Запуск анимации при загрузке
window.addEventListener('load', () => {
    animateStats();
    
    // Добавляем класс для анимации загрузки
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Preloader (опционально)
const preloader = document.createElement('div');
preloader.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s ease;
`;
preloader.innerHTML = '<div style="font-size: 3rem; animation: pulse 1s infinite;">🍳</div>';
document.body.appendChild(preloader);

setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.remove();
    }, 500);
}, 1000);

console.log('🍳 СтудентКулинар готов к работе!');
console.log('💰 Все рецепты экономичные и проверенные');
console.log('👨‍🍳 Приятного аппетита!');
