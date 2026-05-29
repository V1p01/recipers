/**
 * КУЛИНАРНАЯ КНИГА - ULTRA PREMIUM SCRIPT
 * Анимации частиц, плавная загрузка, таймеры, избранное
 */

// ========== БАЗА ДАННЫХ РЕЦЕПТОВ ==========
const recipes = [
    { id: 1, name: "Классический омлет", category: "breakfast", time: 10, calories: 250, difficulty: "Лёгкий", tags: ["быстро", "завтрак"], ingredients: ["4 яйца", "100 мл молока", "соль", "перец", "20 г сливочного масла"], steps: ["Взбить яйца с молоком", "Посолить, поперчить", "Вылить на разогретую сковороду", "Жарить под крышкой 5-7 минут"] },
    { id: 2, name: "Овсяная каша с ягодами", category: "breakfast", time: 10, calories: 320, difficulty: "Лёгкий", tags: ["полезно", "быстро"], ingredients: ["50 г овсяных хлопьев", "200 мл молока", "мёд", "ягоды", "орехи"], steps: ["Довести молоко до кипения", "Добавить овсянку", "Варить 5 минут", "Добавить мёд и ягоды"] },
    { id: 3, name: "Сырники творожные", category: "breakfast", time: 25, calories: 380, difficulty: "Средний", tags: ["творог", "десерт"], ingredients: ["500 г творога", "2 яйца", "3 ст.л. муки", "сахар", "ванилин"], steps: ["Смешать творог с яйцами", "Добавить муку и сахар", "Сформировать сырники", "Обжарить до золотистой корочки"] },
    { id: 4, name: "Борщ украинский", category: "soup", time: 90, calories: 210, difficulty: "Сложный", tags: ["суп", "сытный"], ingredients: ["2 свеклы", "300 г капусты", "4 картофелины", "1 морковь", "1 луковица", "500 г говядины", "томатная паста"], steps: ["Сварить бульон", "Нарезать свеклу, потушить", "Добавить картофель и капусту", "Пассеровать лук с морковью", "Соединить всё, варить 15 минут"] },
    { id: 5, name: "Тыквенный крем-суп", category: "soup", time: 40, calories: 180, difficulty: "Средний", tags: ["суп-пюре", "осенний"], ingredients: ["500 г тыквы", "2 картофелины", "1 морковь", "1 луковица", "100 мл сливок", "имбирь"], steps: ["Нарезать овощи", "Обжарить лук с морковью", "Добавить тыкву и картофель", "Варить до мягкости", "Измельчить блендером"] },
    { id: 6, name: "Солянка сборная", category: "soup", time: 60, calories: 350, difficulty: "Средний", tags: ["суп", "мясной"], ingredients: ["колбаса вареная 200 г", "колбаса копченая 200 г", "говядина 300 г", "огурцы соленые 3 шт", "маслины", "лимон"], steps: ["Сварить бульон", "Обжарить колбасу с луком", "Добавить огурцы и томат", "Варить 10 минут", "Подавать с лимоном"] },
    { id: 7, name: "Паста Карбонара", category: "main", time: 25, calories: 580, difficulty: "Средний", tags: ["паста", "итальянская"], ingredients: ["300 г спагетти", "150 г бекона", "3 яйца", "100 г пармезана", "чеснок"], steps: ["Отварить спагетти", "Обжарить бекон", "Смешать яйца с пармезаном", "Соединить всё, перемешать"] },
    { id: 8, name: "Плов с курицей", category: "main", time: 80, calories: 450, difficulty: "Средний", tags: ["плов", "восточный"], ingredients: ["600 г курицы", "2 стакана риса", "2 моркови", "2 луковицы", "чеснок", "зира"], steps: ["Обжарить курицу", "Добавить лук и морковь", "Засыпать рис", "Воткнуть чеснок", "Томить 30 минут"] },
    { id: 9, name: "Домашние котлеты", category: "main", time: 45, calories: 420, difficulty: "Средний", tags: ["мясо", "ужин"], ingredients: ["500 г фарша", "1 луковица", "1 яйцо", "2 куска батона", "молоко", "сухари"], steps: ["Замочить батон", "Смешать фарш с луком", "Сформировать котлеты", "Обжарить с двух сторон"] },
    { id: 10, name: "Блинчики с творогом", category: "dessert", time: 40, calories: 320, difficulty: "Средний", tags: ["блины", "десерт"], ingredients: ["500 мл молока", "2 яйца", "200 г муки", "сахар", "300 г творога", "изюм"], steps: ["Замесить тесто", "Испечь блины", "Смешать творог с изюмом", "Завернуть начинку"] },
    { id: 11, name: "Шарлотка с яблоками", category: "dessert", time: 50, calories: 280, difficulty: "Лёгкий", tags: ["пирог", "яблоки"], ingredients: ["4 яйца", "1 стакан сахара", "1 стакан муки", "3 яблока", "корица"], steps: ["Взбить яйца с сахаром", "Добавить муку", "Нарезать яблоки", "Выпекать 35 минут"] },
    { id: 12, name: "Тирамису", category: "dessert", time: 30, calories: 450, difficulty: "Сложный", tags: ["десерт", "итальянский"], ingredients: ["200 г савоярди", "250 г маскарпоне", "2 яйца", "сахар", "кофе", "какао"], steps: ["Сварить кофе", "Взбить желтки с сахаром", "Добавить маскарпоне", "Собрать слоями"] },
    { id: 13, name: "Цезарь с курицей", category: "salad", time: 30, calories: 380, difficulty: "Средний", tags: ["салат", "популярный"], ingredients: ["300 г курицы", "салат романо", "помидоры черри", "пармезан", "сухарики", "соус"], steps: ["Обжарить курицу", "Нарвать салат", "Добавить помидоры", "Полить соусом"] },
    { id: 14, name: "Греческий салат", category: "salad", time: 15, calories: 210, difficulty: "Лёгкий", tags: ["салат", "овощной"], ingredients: ["огурцы", "помидоры", "перец", "фета", "маслины", "масло"], steps: ["Нарезать овощи", "Добавить фету и маслины", "Заправить маслом"] },
    { id: 15, name: "Домашняя пицца", category: "baking", time: 90, calories: 520, difficulty: "Средний", tags: ["пицца", "тесто"], ingredients: ["500 г муки", "дрожжи", "вода", "соус", "моцарелла", "колбаса"], steps: ["Замесить тесто", "Раскатать", "Выложить начинку", "Выпекать 20 минут"] },
    { id: 16, name: "Банановый хлеб", category: "baking", time: 60, calories: 290, difficulty: "Лёгкий", tags: ["выпечка", "бананы"], ingredients: ["2 банана", "2 яйца", "150 г муки", "100 г сахара", "масло"], steps: ["Размять бананы", "Смешать с яйцами", "Добавить муку", "Выпекать 45 минут"] },
    { id: 17, name: "Смузи клубничный", category: "drinks", time: 5, calories: 150, difficulty: "Лёгкий", tags: ["напиток", "быстро"], ingredients: ["200 г клубники", "1 банан", "100 мл йогурта", "сок"], steps: ["Смешать всё в блендере", "Взбить до однородности"] },
    { id: 18, name: "Какао с маршмеллоу", category: "drinks", time: 10, calories: 180, difficulty: "Лёгкий", tags: ["напиток", "десерт"], ingredients: ["500 мл молока", "2 ст.л. какао", "сахар", "маршмеллоу"], steps: ["Подогреть молоко", "Смешать какао с сахаром", "Варить 2-3 минуты"] },
    { id: 19, name: "Куриный суп с лапшой", category: "soup", time: 50, calories: 190, difficulty: "Лёгкий", tags: ["суп", "курица"], ingredients: ["400 г курицы", "100 г лапши", "морковь", "лук", "картофель"], steps: ["Сварить бульон", "Добавить картофель", "Засыпать лапшу"] },
    { id: 20, name: "Рис с овощами", category: "main", time: 35, calories: 280, difficulty: "Лёгкий", tags: ["вегетарианское"], ingredients: ["1 стакан риса", "морковь", "перец", "кукуруза", "горошек", "соевый соус"], steps: ["Отварить рис", "Обжарить овощи", "Смешать"] },
    { id: 21, name: "Запеченная семга", category: "main", time: 35, calories: 340, difficulty: "Средний", tags: ["рыба", "полезно"], ingredients: ["400 г семги", "лимон", "розмарин", "масло"], steps: ["Посолить рыбу", "Сбрызнуть маслом", "Запекать 20 минут"] },
    { id: 22, name: "Морковный торт", category: "dessert", time: 80, calories: 420, difficulty: "Сложный", tags: ["торт", "морковь"], ingredients: ["300 г моркови", "200 г муки", "200 г сахара", "3 яйца", "масло", "орехи", "крем-сыр"], steps: ["Натереть морковь", "Взбить яйца с сахаром", "Добавить муку", "Выпекать 35 минут"] },
    { id: 23, name: "Лимонный лимонад", category: "drinks", time: 10, calories: 120, difficulty: "Лёгкий", tags: ["напиток", "освежающий"], ingredients: ["2 лимона", "1 л воды", "сахар", "мята", "лед"], steps: ["Выжать сок", "Смешать с водой и сахаром", "Добавить мяту"] },
    { id: 24, name: "Оливье", category: "salad", time: 40, calories: 350, difficulty: "Средний", tags: ["салат", "праздничный"], ingredients: ["4 картофелины", "2 моркови", "300 г колбасы", "огурцы", "горошек", "майонез"], steps: ["Отварить овощи", "Нарезать всё кубиками", "Заправить майонезом"] },
    { id: 25, name: "Жаркое по-домашнему", category: "main", time: 70, calories: 490, difficulty: "Средний", tags: ["мясо", "сытный"], ingredients: ["600 г свинины", "6 картофелин", "2 луковицы", "морковь", "чеснок"], steps: ["Обжарить мясо", "Добавить лук и морковь", "Добавить картофель", "Тушить до готовности"] }
];

// ========== СОСТОЯНИЕ ==========
let favorites = JSON.parse(localStorage.getItem('cookbook_favorites')) || [];
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'name';

// ========== DOM ЭЛЕМЕНТЫ ==========
const recipesContainer = document.getElementById('recipesContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const emptyState = document.getElementById('emptyState');
const categoryTitle = document.getElementById('categoryTitle');
const recipeCountSpan = document.getElementById('recipeCount');
const favCountSpan = document.getElementById('favCount');
const modal = document.getElementById('recipeModal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModalBtn');
const toast = document.getElementById('toast');
const loader = document.getElementById('loader');

let timerInterval = null;

// ========== ЧАСТИЦЫ НА КАНВАСЕ ==========
function initCanvas() {
    const canvas = document.getElementById('canvasBg');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.3 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 107, 107, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let particle of particles) {
            particle.update();
            particle.draw();
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ========== СКРЫТЬ ЗАГРУЗЧИК ==========
function hideLoader() {
    if (loader) {
        loader.classList.add('hide');
        setTimeout(() => {
            if (loader) loader.style.display = 'none';
        }, 600);
    }
}

// ========== ТОСТ ==========
function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ========== ИЗБРАННОЕ ==========
function saveFavorites() {
    localStorage.setItem('cookbook_favorites', JSON.stringify(favorites));
    updateStats();
}

function toggleFavorite(recipeId) {
    const index = favorites.indexOf(recipeId);
    if (index === -1) {
        favorites.push(recipeId);
        showToast('✨ Добавлено в избранное!');
    } else {
        favorites.splice(index, 1);
        showToast('🗑️ Удалено из избранного');
    }
    saveFavorites();
    renderRecipes();
    updateStats();
}

function isFavorite(recipeId) {
    return favorites.includes(recipeId);
}

function updateStats() {
    if (recipeCountSpan) recipeCountSpan.textContent = recipes.length;
    if (favCountSpan) favCountSpan.textContent = favorites.length;
}

// ========== ФИЛЬТРАЦИЯ И ПОИСК ==========
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
    
    const categoryNames = {
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
    if (categoryTitle) categoryTitle.textContent = categoryNames[currentCategory] || 'Рецепты';
    
    renderRecipes();
}

function showFavorites() {
    currentCategory = 'favorites';
    currentSearch = '';
    if (searchInput) searchInput.value = '';
    
    document.querySelectorAll('.nav__btn').forEach(btn => btn.classList.remove('active'));
    const favBtn = document.getElementById('favoritesBtn');
    if (favBtn) favBtn.classList.add('active');
    if (categoryTitle) categoryTitle.textContent = 'Избранное ⭐';
    renderRecipes();
}

function applySort(recipesToSort) {
    const [field, order] = currentSort.split('-');
    const sorted = [...recipesToSort];
    
    if (field === 'name') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (field === 'time') {
        sorted.sort((a, b) => order === 'asc' ? a.time - b.time : b.time - a.time);
    } else if (field === 'calories') {
        sorted.sort((a, b) => order === 'asc' ? a.calories - b.calories : b.calories - a.calories);
    }
    return sorted;
}

function getDifficultyIcon(difficulty) {
    if (difficulty === 'Лёгкий') return '🟢';
    if (difficulty === 'Средний') return '🟡';
    return '🔴';
}

// ========== РЕНДЕР РЕЦЕПТОВ ==========
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
            r.tags.some(tag => tag.toLowerCase().includes(currentSearch))
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
            <div class="recipe-card__image" style="background-image: url('https://picsum.photos/id/${30 + recipe.id}/400/250')"></div>
            <div class="recipe-card__info">
                <h3 class="recipe-card__title">${escapeHtml(recipe.name)}</h3>
                <div class="recipe-card__meta">
                    <span>⏱️ ${recipe.time} мин</span>
                    <span>🔥 ${recipe.calories} ккал</span>
                </div>
                <div class="recipe-card__tags">
                    ${recipe.tags.map(tag => `<span class="tag">#${escapeHtml(tag)}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Добавляем класс visible для анимации
    setTimeout(() => {
        document.querySelectorAll('.recipe-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 10);
    
    // Обработчики кликов
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

// ========== МОДАЛЬНОЕ ОКНО ==========
function openModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    stopTimer();
    
    if (!modalContent) return;
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${escapeHtml(recipe.name)}</h2>
            <div class="recipe-card__meta">
                <span>⏱️ ${recipe.time} минут</span>
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
                ${recipe.ingredients.map(ing => `<li>${escapeHtml(ing)}</li>`).join('')}
            </ul>
            
            <h3>👩‍🍳 Пошаговое приготовление</h3>
            <ol class="steps-list">
                ${recipe.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}
            </ol>
            
            <div class="timer-section">
                <strong>⏰ Таймер для этого рецепта:</strong>
                <div class="timer-buttons">
                    <button class="timer-btn" data-start-timer="${recipe.time * 60}">▶️ Запустить таймер (${recipe.time} мин)</button>
                    <button class="timer-btn" data-stop-timer="true">⏹️ Остановить</button>
                    <span id="modalTimerDisplay" class="timer-display"></span>
                </div>
            </div>
            
            <div class="recipe-card__tags">
                ${recipe.tags.map(tag => `<span class="tag">#${escapeHtml(tag)}</span>`).join('')}
            </div>
            
            <button class="timer-btn" id="modalFavBtn" style="background: ${isFavorite(recipe.id) ? '#ff6b6b' : 'rgba(255,255,255,0.1)'}; margin-top: 1rem; width: 100%;">
                ${isFavorite(recipe.id) ? '❤️ Убрать из избранного' : '🤍 Добавить в избранное'}
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    modal.classList.add('show');
    
    // Таймер кнопки
    const startBtn = modalContent.querySelector('[data-start-timer]');
    const stopBtn = modalContent.querySelector('[data-stop-timer]');
    
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            const seconds = parseInt(startBtn.dataset.startTimer);
            startTimer(seconds);
        });
    }
    if (stopBtn) {
        stopBtn.addEventListener('click', stopTimer);
    }
    
    const modalFavBtn = document.getElementById('modalFavBtn');
    if (modalFavBtn) {
        modalFavBtn.addEventListener('click', () => {
            toggleFavorite(recipe.id);
            openModal(recipe.id);
        });
    }
}

function startTimer(seconds) {
    stopTimer();
    let remaining = seconds;
    const timerDisplay = document.getElementById('modalTimerDisplay');
    if (!timerDisplay) return;
    
    timerDisplay.textContent = formatTime(remaining);
    
    timerInterval = setInterval(() => {
        if (remaining <= 0) {
            stopTimer();
            timerDisplay.textContent = '✅ Готово!';
            showToast('⏰ Время приготовления истекло! Приятного аппетита!');
        } else {
            remaining--;
            timerDisplay.textContent = formatTime(remaining);
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    const timerDisplay = document.getElementById('modalTimerDisplay');
    if (timerDisplay) timerDisplay.textContent = '';
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function closeModal() {
    stopTimer();
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }
}

function handleSortChange() {
    currentSort = sortSelect.value;
    renderRecipes();
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
function init() {
    // Запускаем канвас
    initCanvas();
    
    // Обновляем статистику
    updateStats();
    
    // Рендерим рецепты
    renderRecipes();
    
    // Скрываем загрузчик через небольшую задержку
    setTimeout(hideLoader, 800);
    
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
    
    document.querySelectorAll('.footer__col a[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            filterCategory(link.dataset.category);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Запуск после полной загрузки DOM
document.addEventListener('DOMContentLoaded', init);
