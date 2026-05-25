// Данные о рецептах (цены адаптированы под Якутск)
const recipesData = {
    'lazy-vareniki': {
        title: 'Ленивые вареники',
        emoji: '🥞',
        time: '10 минут',
        price: '~180₽',
        difficulty: 'Легко',
        ingredients: [
            'Творог (местный) - 500 г (120₽)',
            'Яйцо - 1 шт (15₽)',
            'Мука - 5 ст. ложек (10₽)',
            'Сахар - 2 ст. ложки (5₽)',
            'Соль - щепотка',
            'Сливочное масло - 30 г (30₽)'
        ],
        instructions: [
            'Смешайте творог с яйцом, сахаром и солью',
            'Добавьте муку и замесите мягкое тесто',
            'Раскатайте колбаски и нарежьте кусочками',
            'Варите в кипящей воде 2-3 минуты после всплытия',
            'Подавайте со сметаной или вареньем'
        ],
        tip: '💡 В Якутске творог лучше брать местного производства — он дешевле и вкуснее. Не добавляйте слишком много муки, иначе вареники будут жесткими.'
    },
    'tuna-pasta': {
        title: 'Паста с тунцом',
        emoji: '🍝',
        time: '20 минут',
        price: '~320₽',
        difficulty: 'Средне',
        ingredients: [
            'Макароны - 250 г (45₽)',
            'Консервированный тунец - 1 банка (180₽)',
            'Томатная паста - 2 ст. ложки (25₽)',
            'Лук - 1 шт (10₽)',
            'Чеснок - 2 зубчика (10₽)',
            'Масло растительное - 2 ст. ложки (10₽)',
            'Соль, перец - по вкусу'
        ],
        instructions: [
            'Отварите макароны до состояния al dente',
            'Обжарьте мелко нарезанный лук и чеснок',
            'Добавьте томатную пасту и тунец, перемешайте',
            'Тушите соус 5-7 минут',
            'Смешайте с макаронами и прогрейте вместе'
        ],
        tip: '💡 Консервы тунца в Якутске можно найти по акции в крупных супермаркетах. Сохраните воду от макарон — пригодится для соуса!'
    },
    'rice-veggies': {
        title: 'Рис с овощами',
        emoji: '🍚',
        time: '25 минут',
        price: '~230₽',
        difficulty: 'Легко',
        ingredients: [
            'Рис - 1 стакан (30₽)',
            'Замороженные овощи - 300 г (120₽)',
            'Соевый соус - 2 ст. ложки (20₽)',
            'Яйцо - 2 шт (30₽)',
            'Масло растительное - 2 ст. ложки (10₽)',
            'Специи - по вкусу (20₽)'
        ],
        instructions: [
            'Отварите рис до готовности',
            'На сковороде обжарьте замороженные овощи 5-7 минут',
            'Добавьте рис и соевый соус, перемешайте',
            'По желанию добавьте яйца и обжарьте до готовности',
            'Приправьте специями по вкусу'
        ],
        tip: '💡 В Якутске замороженные овощи часто дешевле свежих, особенно зимой. Используйте охлажденный рис — будет рассыпчатым!'
    },
    'potato-casserole': {
        title: 'Картофельная запеканка',
        emoji: '🥔',
        time: '30 минут',
        price: '~380₽',
        difficulty: 'Средне',
        ingredients: [
            'Картофель - 7 шт (140₽)',
            'Сосиски - 4 шт (120₽)',
            'Сыр - 150 г (90₽)',
            'Яйца - 2 шт (30₽)',
            'Молоко - 100 мл (15₽)',
            'Соль, перец - по вкусу'
        ],
        instructions: [
            'Нарежьте картофель тонкими кружочками',
            'Выложите слоями картофель и нарезанные сосиски',
            'Залейте смесью яиц и молока',
            'Посыпьте тертым сыром',
            'Запекайте при 180°C 25-30 минут до золотистой корочки'
        ],
        tip: '💡 Картофель в Якутске лучше покупать на рынке мешками — выходит дешевле. Местный сыр тоже отличный вариант для экономии.'
    },
    'hot-sandwiches': {
        title: 'Горячие бутерброды',
        emoji: '🥪',
        time: '5 минут',
        price: '~140₽',
        difficulty: 'Легко',
        ingredients: [
            'Хлеб - 4 куска (30₽)',
            'Сыр - 100 г (60₽)',
            'Колбаса/ветчина - 100 г (50₽)',
            'Помидор - 1 шт (25₽)',
            'Майонез или кетчуп - по вкусу (15₽)',
            'Зелень - для украшения (10₽)'
        ],
        instructions: [
            'Смажьте хлеб соусом',
            'Выложите начинку: колбасу, помидоры',
            'Сверху положите сыр',
            'Разогрейте в микроволновке 1-2 минуты',
            'Украсьте зеленью и подавайте'
        ],
        tip: '💡 Хлеб в Якутске лучше покупать в местных пекарнях — свежее и дешевле. Соус кладите между слоями, чтобы бутерброды не размокли.'
    },
    'eggs-tomatoes': {
        title: 'Яичница с помидорами',
        emoji: '🍳',
        time: '7 минут',
        price: '~120₽',
        difficulty: 'Легко',
        ingredients: [
            'Яйца - 3 шт (45₽)',
            'Помидор - 1 шт (25₽)',
            'Лук - 1/2 шт (10₽)',
            'Масло растительное - 1 ст. ложка (5₽)',
            'Соль, перец - по вкусу',
            'Зелень - 15₽'
        ],
        instructions: [
            'Обжарьте нарезанный лук до золотистости',
            'Добавьте нарезанный помидор, жарьте 2 минуты',
            'Разбейте яйца прямо на сковороду',
            'Жарьте на среднем огне до желаемой готовности',
            'Посолите, поперчите и посыпьте зеленью'
        ],
        tip: '💡 Яйца в Якутске выгоднее покупать десятками на рынках. Для нежной яичницы накройте сковороду крышкой на 1-2 минуты.'
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
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: #666; flex-wrap: wrap;">
                <span>⏱️ ${recipe.time}</span>
                <span>💰 ${recipe.price}</span>
                <span>📊 ${recipe.difficulty}</span>
            </div>
            
            <h3>📝 Ингредиенты (цены Якутск):</h3>
            <ul>
                ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
            </ul>
            
            <h3>👨‍🍳 Приготовление:</h3>
            <ol style="padding-left: 1.2rem; line-height: 2;">
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: #FFF3F3; border-radius: 10px; border-left: 4px solid var(--primary);">
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

// Preloader
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

console.log('🍳 Кулинария студента | Якутск');
console.log('💰 Все рецепты с актуальными ценами Якутска');
console.log('👨‍🍳 Приятного аппетита!');
