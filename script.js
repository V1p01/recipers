/**
 * КУЛИНАРНАЯ КНИГА - ULTRA VIBE
 * Исправлена проблема с бесконечной загрузкой на ПК
 */

// БАЗА ДАННЫХ РЕЦЕПТОВ (25 штук)
const recipes = [
    { id: 1, name: "Классический омлет", category: "breakfast", time: 10, calories: 250, difficulty: "Лёгкий", tags: ["быстро", "завтрак"], ingredients: ["4 яйца", "100 мл молока", "соль", "перец", "сливочное масло"], steps: ["Взбить яйца с молоком", "Посолить, поперчить", "Вылить на сковороду", "Жарить под крышкой 5 минут"] },
    { id: 2, name: "Овсяная каша с ягодами", category: "breakfast", time: 10, calories: 320, difficulty: "Лёгкий", tags: ["полезно", "быстро"], ingredients: ["50 г овсянки", "200 мл молока", "мёд", "ягоды", "орехи"], steps: ["Довести молоко до кипения", "Добавить овсянку", "Варить 5 минут", "Добавить мёд и ягоды"] },
    { id: 3, name: "Сырники", category: "breakfast", time: 25, calories: 380, difficulty: "Средний", tags: ["творог", "десерт"], ingredients: ["500 г творога", "2 яйца", "3 ст.л. муки", "сахар", "ванилин"], steps: ["Смешать творог с яйцами", "Добавить муку и сахар", "Сформировать сырники", "Обжарить до золотистой корочки"] },
    { id: 4, name: "Борщ", category: "soup", time: 90, calories: 210, difficulty: "Сложный", tags: ["суп", "сытный"], ingredients: ["2 свеклы", "300 г капусты", "4 картофелины", "морковь", "лук", "говядина", "томатная паста"], steps: ["Сварить бульон", "Нарезать свеклу и потушить", "Добавить картофель и капусту", "Пассеровать лук с морковью", "Соединить всё, варить 15 минут"] },
    { id: 5, name: "Тыквенный крем-суп", category: "soup", time: 40, calories: 180, difficulty: "Средний", tags: ["суп-пюре"], ingredients: ["500 г тыквы", "2 картофелины", "морковь", "лук", "100 мл сливок", "имбирь"], steps: ["Нарезать овощи", "Обжарить лук с морковью", "Добавить тыкву и картофель", "Варить до мягкости", "Измельчить блендером"] },
    { id: 6, name: "Паста Карбонара", category: "main", time: 25, calories: 580, difficulty: "Средний", tags: ["паста", "итальянская"], ingredients: ["300 г спагетти", "150 г бекона", "3 яйца", "100 г пармезана", "чеснок"], steps: ["Отварить спагетти", "Обжарить бекон с чесноком", "Смешать яйца с пармезаном", "Соединить всё и перемешать"] },
    { id: 7, name: "Плов с курицей", category: "main", time: 80, calories: 450, difficulty: "Средний", tags: ["плов", "восточный"], ingredients: ["600 г курицы", "2 стакана риса", "2 моркови", "2 луковицы", "чеснок", "зира"], steps: ["Обжарить курицу", "Добавить лук и морковь", "Залить водой, добавить специи", "Засыпать рис", "Томить 30 минут"] },
    { id: 8, name: "Домашние котлеты", category: "main", time: 45, calories: 420, difficulty: "Средний", tags: ["мясо", "ужин"], ingredients: ["500 г фарша", "лук", "яйцо", "батон", "молоко", "сухари"], steps: ["Замочить батон в молоке", "Смешать фарш с луком", "Сформировать котлеты", "Обжарить с двух сторон"] },
    { id: 9, name: "Блинчики с творогом", category: "dessert", time: 40, calories: 320, difficulty: "Средний", tags: ["блины", "десерт"], ingredients: ["500 мл молока", "2 яйца", "200 г муки", "сахар", "300 г творога", "изюм"], steps: ["Замесить тесто", "Испечь блины", "Смешать творог с изюмом", "Завернуть начинку"] },
    { id: 10, name: "Шарлотка", category: "dessert", time: 50, calories: 280, difficulty: "Лёгкий", tags: ["пирог", "яблоки"], ingredients: ["4 яйца", "1 стакан сахара", "1 стакан муки", "3 яблока", "корица"], steps: ["Взбить яйца с сахаром", "Добавить муку", "Нарезать яблоки", "Выпекать 35 минут"] },
    { id: 11, name: "Цезарь с курицей", category: "salad", time: 30, calories: 380, difficulty: "Средний", tags: ["салат", "популярный"], ingredients: ["300 г курицы", "салат романо", "помидоры черри", "пармезан", "сухарики", "соус"], steps: ["Обжарить курицу", "Нарвать салат", "Добавить помидоры и сухарики", "Полить соусом"] },
    { id: 12, name: "Греческий салат", category: "salad", time: 15, calories: 210, difficulty: "Лёгкий", tags: ["салат", "овощной"], ingredients: ["огурцы", "помидоры", "перец", "фета", "маслины", "оливковое масло"], steps: ["Нарезать овощи", "Добавить фету и маслины", "Заправить маслом"] },
    { id: 13, name: "Домашняя пицца", category: "baking", time: 90, calories: 520, difficulty: "Средний", tags: ["пицца", "тесто"], ingredients: ["500 г муки", "дрожжи", "вода", "томатный соус", "моцарелла", "колбаса"], steps: ["Замесить тесто", "Раскатать", "Выложить начинку", "Выпекать 20 минут"] },
    { id: 14, name: "Банановый хлеб", category: "baking", time: 60, calories: 290, difficulty: "Лёгкий", tags: ["выпечка", "бананы"], ingredients: ["2 банана", "2 яйца", "150 г муки", "100 г сахара", "сливочное масло"], steps: ["Размять бананы", "Смешать с яйцами", "Добавить муку", "Выпекать 45 минут"] },
    { id: 15, name: "Смузи клубничный", category: "drinks", time: 5, calories: 150, difficulty: "Лёгкий", tags: ["напиток", "быстро"], ingredients: ["200 г клубники", "1 банан", "100 мл йогурта", "апельсиновый сок"], steps: ["Смешать всё в блендере", "Взбить до однородности"] },
    { id: 16, name: "Какао с маршмеллоу", category: "drinks", time: 10, calories: 180, difficulty: "Лёгкий", tags: ["напиток", "десерт"], ingredients: ["500 мл молока", "2 ст.л. какао", "сахар", "маршмеллоу"], steps: ["Подогреть молоко", "Смешать какао с сахаром", "Варить 2-3 минуты", "Подавать с маршмеллоу"] },
    { id: 17, name: "Куриный суп с лапшой", category: "soup", time: 50, calories: 190, difficulty: "Лёгкий", tags: ["суп", "курица"], ingredients: ["400 г курицы", "100 г лапши", "морковь", "лук", "картофель"], steps: ["Сварить бульон", "Добавить картофель", "Добавить зажарку", "Засыпать лапшу"] },
    { id: 18, name: "Рис с овощами", category: "main", time: 35, calories: 280, difficulty: "Лёгкий", tags: ["вегетарианское"], ingredients: ["1 стакан риса", "морковь", "перец", "кукуруза", "горошек", "соевый соус"], steps: ["Отварить рис", "Обжарить овощи", "Смешать с рисом"] },
    { id: 19, name: "Запеченная семга", category: "main", time: 35, calories: 340, difficulty: "Средний", tags: ["рыба", "полезно"], ingredients: ["400 г семги", "лимон", "розмарин", "оливковое масло"], steps: ["Посолить и поперчить", "Сбрызнуть маслом", "Выложить лимон и розмарин", "Запекать 20 минут"] },
    { id: 20, name: "Морковный торт", category: "dessert", time: 80, calories: 420, difficulty: "Сложный", tags: ["торт", "морковь"], ingredients: ["300 г моркови", "200 г муки", "200 г сахара", "3 яйца", "масло", "орехи", "крем-сыр"], steps: ["Натереть морковь", "Взбить яйца с сахаром", "Добавить муку и морковь", "Выпекать 35 минут"] },
    { id: 21, name: "Лимонный лимонад", category: "drinks", time: 10, calories: 120, difficulty: "Лёгкий", tags: ["напиток", "освежающий"], ingredients: ["2 лимона", "1 л воды", "сахар", "мята", "лед"], steps: ["Выжать сок лимонов", "Смешать с водой и сахаром", "Добавить мяту и лед"] },
    { id: 22, name: "Оливье", category: "salad", time: 40, calories: 350, difficulty: "Средний", tags: ["салат", "праздничный"], ingredients: ["4 картофелины", "2 моркови", "300 г колбасы", "огурцы", "горошек", "майонез"], steps: ["Отварить овощи", "Нарезать всё кубиками", "Добавить горошек", "Заправить майонезом"] },
    { id: 23, name: "Жаркое по-домашнему", category: "main", time: 70, calories: 490, difficulty: "Средний", tags: ["мясо", "сытный"], ingredients: ["600 г свинины", "6 картофелин", "2 луковицы", "морковь", "чеснок", "специи"], steps: ["Обжарить мясо", "Добавить лук и морковь", "Добавить картофель", "Тушить до готовности"] },
    { id: 24, name: "Солянка", category: "soup", time: 60, calories: 350, difficulty: "Средний", tags: ["суп", "мясной"], ingredients: ["колбаса вареная 200 г", "колбаса копченая 200 г", "говядина", "огурцы", "маслины", "лимон"], steps: ["Сварить бульон", "Обжарить колбасу с луком", "Добавить огурцы и томат", "Варить 10 минут", "Подавать с лимоном"] },
    { id: 25, name: "Тирамису", category: "dessert", time: 30, calories: 450, difficulty: "Сложный", tags: ["десерт", "итальянский"], ingredients: ["200 г савоярди", "250 г маскарпоне", "2 яйца", "сахар", "кофе", "какао"], steps: ["Сварить кофе", "Взбить желтки с сахаром", "Добавить маскарпоне", "Обмакнуть печенье в кофе", "Собрать слоями"] }
];

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let favorites = JSON.parse(localStorage.getItem('fav_recipes')) || [];
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'name';
let timerInterval = null;

// ========== DOM ЭЛЕМЕНТЫ ==========
const loaderEl = document.getElementById('loader');
const recipesContainer = document.getElementById('recipesContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const emptyState = document.getElementById('emptyState');
const categoryTitle = document.getElementById('categoryTitle');
const recipeCountSpan = document.getElementById('recipeCount');
const favCountSpan = document.getElementById('favCount');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModalBtn');
const toast = document.getElementById('toast');

// ========== ФУНКЦИИ ==========

// СКРЫТИЕ ЗАГРУЗЧИКА (ГЛАВНОЕ ИСПРАВЛЕНИЕ)
function hideLoader() {
    if (loaderEl) {
        loaderEl.classList.add('hide');
        // Дополнительная страховка - скрыть полностью через 1 секунду
        setTimeout(() => {
            if (loaderEl) {
                loaderEl.style.display = 'none';
            }
        }, 1000);
    }
}

// ПОКАЗАТЬ ТОСТ
function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ИЗБРАННОЕ
function saveFavorites() {
    localStorage.setItem('fav_recipes', JSON.stringify(favorites));
    updateStats();
}

function toggleFavorite(id) {
    const idx = favorites.indexOf(id);
    if (idx === -1) {
        favorites.push(id);
        showToast('✨ Добавлено в избранное!');
    } else {
        favorites.splice(idx, 1);
        showToast('🗑️ Удалено из избранного');
    }
    saveFavorites();
    renderRecipes();
    updateStats();
}

function isFavorite(id) {
    return favorites.includes(id);
}

function updateStats() {
    if (recipeCountSpan) recipeCountSpan.textContent = recipes.length;
    if (favCountSpan) favCountSpan.textContent = favorites.length;
}

// ПОИСК И ФИЛЬТРАЦИЯ
function searchRecipes() {
    currentSearch = searchInput.value.toLowerCase();
    renderRecipes();
}

function filterCategory(category) {
    currentCategory = category;
    currentSearch = '';
    if (searchInput) searchInput.value = '';
    
    document.querySelectorAll('.nav__btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) btn.classList.add('active');
    });
    if (category === 'favorites') {
        const favBtn = document.getElementById('favoritesBtn');
        if (favBtn) favBtn.classList.add('active');
    }
    if (category === 'all') {
        const allBtn = document.querySelector('.nav__btn[data-category="all"]');
        if (allBtn) allBtn.classList.add('active');
    }
    
    const titles = {
        all: 'Все рецепты',
        breakfast: 'Завтраки 🍳',
        soup: 'Супы 🥣',
        main: 'Основные блюда 🍝',
        dessert: 'Десерты 🍰',
        salad: 'Салаты 🥗',
        baking: 'Выпечка 🥖',
        drinks: 'Напитки 🥤',
        favorites: 'Избранное ⭐'
    };
    if (categoryTitle) categoryTitle.textContent = titles[category] || 'Рецепты';
    
    renderRecipes();
}

function showFavorites() {
    filterCategory('favorites');
}

function applySort(arr) {
    const [field, order] = currentSort.split('-');
    const sorted = [...arr];
    
    if (field === 'name') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (field === 'time') {
        sorted.sort((a, b) => order === 'asc' ? a.time - b.time : b.time - a.time);
    } else if (field === 'calories') {
        sorted.sort((a, b) => order === 'asc' ? a.calories - b.calories : b.calories - a.calories);
    }
    return sorted;
}

function getDifficultyIcon(diff) {
    if (diff === 'Лёгкий') return '🟢';
    if (diff === 'Средний') return '🟡';
    return '🔴';
}

// РЕНДЕР РЕЦЕПТОВ
function renderRecipes() {
    let filtered = [...recipes];
    
    if (currentCategory !== 'all' && currentCategory !== 'favorites') {
        filtered = filtered.filter(r => r.category === currentCategory);
    } else if (currentCategory === 'favorites') {
        filtered = filtered.filter(r => favorites.includes(r.id));
    }
    
    if (currentSearch) {
        filtered = filtered.filter(r => 
            r.name.toLowerCase().includes(currentSearch) ||
            r.tags.some(t => t.toLowerCase().includes(currentSearch))
        );
    }
    
    filtered = applySort(filtered);
    
    if (filtered.length === 0) {
        if (recipesContainer) recipesContainer.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    if (recipesContainer) recipesContainer.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';
    
    if (!recipesContainer) return;
    
    recipesContainer.innerHTML = filtered.map((recipe, idx) => `
        <div class="recipe-card" data-id="${recipe.id}">
            <div class="recipe-card__badge">${getDifficultyIcon(recipe.difficulty)} ${recipe.difficulty}</div>
            <div class="recipe-card__fav ${isFavorite(recipe.id) ? 'favorited' : ''}" data-fav="${recipe.id}">
                ${isFavorite(recipe.id) ? '❤️' : '🤍'}
            </div>
            <div class="recipe-card__image" style="background-image: url('https://picsum.photos/id/${40 + recipe.id}/400/250')"></div>
            <div class="recipe-card__info">
                <h3 class="recipe-card__title">${escapeHtml(recipe.name)}</h3>
                <div class="recipe-card__meta">
                    <span>⏱️ ${recipe.time} мин</span>
                    <span>🔥 ${recipe.calories} ккал</span>
                </div>
                <div class="recipe-card__tags">
                    ${recipe.tags.map(t => `<span class="tag">#${escapeHtml(t)}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Анимация появления
    setTimeout(() => {
        document.querySelectorAll('.recipe-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 10);
    
    // Обработчики
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('[data-fav]')) return;
            const id = parseInt(card.dataset.id);
            openModal(id);
        });
    });
    
    document.querySelectorAll('[data-fav]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.fav);
            toggleFavorite(id);
        });
    });
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// МОДАЛЬНОЕ ОКНО
function openModal(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;
    
    stopTimer();
    
    if (!modalContent) return;
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${escapeHtml(recipe.name)}</h2>
            <div class="recipe-card__meta">
                <span>⏱️ ${recipe.time} мин</span>
                <span>🔥 ${recipe.calories} ккал</span>
                <span>${getDifficultyIcon(recipe.difficulty)} ${recipe.difficulty}</span>
            </div>
        </div>
        <div class="modal-body">
            <div class="nutrition">
                <div class="nutrition-item"><div class="nutrition-value">${recipe.calories}</div><div>калорий</div></div>
                <div class="nutrition-item"><div class="nutrition-value">${recipe.time}</div><div>минут</div></div>
                <div class="nutrition-item"><div class="nutrition-value">${recipe.ingredients.length}</div><div>ингредиентов</div></div>
                <div class="nutrition-item"><div class="nutrition-value">${recipe.steps.length}</div><div>шагов</div></div>
            </div>
            
            <h3>🛒 Ингредиенты</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(i => `<li>${escapeHtml(i)}</li>`).join('')}
            </ul>
            
            <h3>👩‍🍳 Приготовление</h3>
            <ol class="steps-list">
                ${recipe.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
            </ol>
            
            <div class="timer-section">
                <strong>⏰ Таймер:</strong>
                <div class="timer-buttons">
                    <button class="timer-btn" data-timer-start="${recipe.time * 60}" data-timer-min="${recipe.time}">▶️ Запустить (${recipe.time} мин)</button>
                    <button class="timer-btn" data-timer-stop="true">⏹️ Остановить</button>
                    <span class="timer-display" id="modalTimerDisplay"></span>
                </div>
            </div>
            
            <button class="timer-btn" id="modalFavBtn" style="background: ${isFavorite(recipe.id) ? '#ff6b6b' : 'rgba(255,255,255,0.1)'; width: 100%; margin-top: 1rem;">
                ${isFavorite(recipe.id) ? '❤️ Убрать из избранного' : '🤍 Добавить в избранное'}
            </button>
        </div>
    `;
    
    modal.classList.add('show');
    
    // Таймер кнопки
    const startBtn = modalContent.querySelector('[data-timer-start]');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            const seconds = parseInt(startBtn.dataset.timerStart);
            startTimer(seconds);
        });
    }
    const stopBtn = modalContent.querySelector('[data-timer-stop]');
    if (stopBtn) {
        stopBtn.addEventListener('click', stopTimer);
    }
    
    const favModalBtn = document.getElementById('modalFavBtn');
    if (favModalBtn) {
        favModalBtn.addEventListener('click', () => {
            toggleFavorite(recipe.id);
            openModal(recipe.id);
        });
    }
}

function startTimer(seconds) {
    stopTimer();
    let remaining = seconds;
    const display = document.getElementById('modalTimerDisplay');
    if (!display) return;
    
    display.textContent = formatTime(remaining);
    
    timerInterval = setInterval(() => {
        if (remaining <= 0) {
            stopTimer();
            display.textContent = '✅ Готово!';
            showToast('⏰ Время вышло! Приятного аппетита!');
        } else {
            remaining--;
            display.textContent = formatTime(remaining);
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    const display = document.getElementById('modalTimerDisplay');
    if (display) display.textContent = '';
}

function formatTime(sec) {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function closeModal() {
    stopTimer();
    if (modal) modal.classList.remove('show');
}

function handleSortChange() {
    currentSort = sortSelect.value;
    renderRecipes();
}

// ЧАСТИЦЫ НА КАНВАСЕ
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const particleCount = 60;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.3
        });
    }
    
    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let p of particles) {
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 107, 107, ${p.opacity})`;
            ctx.fill();
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ИНИЦИАЛИЗАЦИЯ
function init() {
    // Запускаем частицы
    initParticles();
    
    // Обновляем статистику
    updateStats();
    
    // Рендерим рецепты
    renderRecipes();
    
    // Скрываем загрузчик (ГЛАВНОЕ ИСПРАВЛЕНИЕ - через небольшую задержку)
    setTimeout(() => {
        hideLoader();
    }, 500);
    
    // События
    if (searchBtn) searchBtn.addEventListener('click', searchRecipes);
    if (searchInput) searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchRecipes();
    });
    if (sortSelect) sortSelect.addEventListener('change', handleSortChange);
    
    document.querySelectorAll('.nav__btn').forEach(btn => {
        if (btn.id === 'favoritesBtn') {
            btn.addEventListener('click', showFavorites);
        } else if (btn.dataset.category) {
            btn.addEventListener('click', () => filterCategory(btn.dataset.category));
        }
    });
    
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modal) window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.querySelectorAll('.footer__links a[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            filterCategory(link.dataset.category);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ЗАПУСК
document.addEventListener('DOMContentLoaded', init);
