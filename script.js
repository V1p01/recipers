/**
 * КУЛИНАРНАЯ КНИГА - PREMIUM SCRIPT
 * Рецепты, поиск, фильтрация, избранное, таймеры + анимации
 */

// ========== БАЗА ДАННЫХ ==========
const recipes = [
    { id: 1, name: "Классический омлет", category: "breakfast", time: 10, calories: 250, difficulty: "Лёгкий", tags: ["быстро", "завтрак", "простой"], ingredients: ["4 яйца", "100 мл молока", "соль по вкусу", "перец по вкусу", "20 г сливочного масла"], steps: ["Взбить яйца с молоком, солью и перцем", "Разогреть сковороду с маслом", "Вылить яичную смесь", "Жарить под крышкой 5-7 минут", "Подавать с зеленью"] },
    { id: 2, name: "Овсяная каша с ягодами", category: "breakfast", time: 10, calories: 320, difficulty: "Лёгкий", tags: ["полезно", "быстро", "завтрак"], ingredients: ["50 г овсяных хлопьев", "200 мл молока", "1 ч.л. мёда", "100 г замороженных ягод", "орехи по желанию"], steps: ["Довести молоко до кипения", "Добавить овсяные хлопья", "Варить 5 минут, помешивая", "Добавить мёд и ягоды", "Посыпать орехами"] },
    { id: 3, name: "Сырники творожные", category: "breakfast", time: 25, calories: 380, difficulty: "Средний", tags: ["творог", "десерт", "завтрак"], ingredients: ["500 г творога", "2 яйца", "3 ст.л. муки", "2 ст.л. сахара", "щепотка ванилина", "растительное масло"], steps: ["Смешать творог с яйцами", "Добавить муку, сахар и ванилин", "Сформировать сырники", "Обжарить до золотистой корочки с двух сторон", "Подавать со сметаной"] },
    { id: 4, name: "Борщ украинский", category: "soup", time: 90, calories: 210, difficulty: "Сложный", tags: ["суп", "сытный", "традиционный"], ingredients: ["2 свеклы", "300 г капусты", "4 картофелины", "1 морковь", "1 луковица", "500 г говядины", "2 ст.л. томатной пасты", "чеснок, зелень"], steps: ["Сварить бульон из говядины (1 час)", "Нарезать свеклу соломкой, потушить с томатной пастой", "Добавить в бульон нарезанный картофель и капусту", "Пассеровать лук с морковью", "Соединить всё, варить 15 минут", "Добавить чеснок и зелень"] },
    { id: 5, name: "Тыквенный крем-суп", category: "soup", time: 40, calories: 180, difficulty: "Средний", tags: ["суп-пюре", "осенний", "полезный"], ingredients: ["500 г тыквы", "2 картофелины", "1 морковь", "1 луковица", "100 мл сливок 20%", "1 см корня имбиря", "соль, перец"], steps: ["Нарезать тыкву, картофель, лук и морковь", "Обжарить лук с морковью", "Добавить тыкву и картофель, залить водой", "Варить до мягкости (20 минут)", "Измельчить блендером до однородности", "Добавить сливки и имбирь, прогреть"] },
    { id: 6, name: "Солянка сборная", category: "soup", time: 60, calories: 350, difficulty: "Средний", tags: ["суп", "мясной", "праздничный"], ingredients: ["200 г вареной колбасы", "200 г копченой колбасы", "300 г говядины", "3 соленых огурца", "100 г маслин", "лимон", "2 луковицы", "2 ст.л. томатной пасты"], steps: ["Сварить бульон из говядины", "Нарезать колбасу и обжарить с луком", "Добавить томатную пасту и нарезанные огурцы", "Переложить зажарку в бульон", "Добавить маслины, варить 10 минут", "Подавать с лимоном и сметаной"] },
    { id: 7, name: "Паста Карбонара", category: "main", time: 25, calories: 580, difficulty: "Средний", tags: ["паста", "итальянская", "ужин"], ingredients: ["300 г спагетти", "150 г бекона", "3 яйца", "100 г пармезана", "2 зубчика чеснока", "соль, перец"], steps: ["Отварить спагетти до al dente", "Обжарить бекон с чесноком", "Смешать яйца с тертым пармезаном", "Соединить горячую пасту с беконом", "Добавить яичную смесь, быстро перемешать", "Подавать с черным перцем"] },
    { id: 8, name: "Плов с курицей", category: "main", time: 80, calories: 450, difficulty: "Средний", tags: ["плов", "восточный", "сытный"], ingredients: ["600 г куриного филе", "2 стакана риса", "2 моркови", "2 луковицы", "1 головка чеснока", "1 ч.л. зиры", "растительное масло"], steps: ["Обжарить курицу до золотистой корочки", "Добавить нарезанный лук и морковь", "Залить водой, добавить специи", "Засыпать рис, разровнять", "Воткнуть головку чеснока", "Томить под крышкой 30 минут"] },
    { id: 9, name: "Домашние котлеты", category: "main", time: 45, calories: 420, difficulty: "Средний", tags: ["мясо", "ужин", "классика"], ingredients: ["500 г фарша (свинина+говядина)", "1 луковица", "2 зубчика чеснока", "1 яйцо", "2 куска батона", "100 мл молока", "панировочные сухари"], steps: ["Замочить батон в молоке", "Смешать фарш с луком, чесноком, яйцом", "Добавить размягченный батон", "Сформировать котлеты", "Обвалять в сухарях", "Жарить по 5 минут с каждой стороны"] },
    { id: 10, name: "Жаркое по-домашнему", category: "main", time: 70, calories: 490, difficulty: "Средний", tags: ["мясо", "сытный", "ужин"], ingredients: ["600 г свинины", "6 картофелин", "2 луковицы", "1 морковь", "3 зубчика чеснока", "лавровый лист", "специи"], steps: ["Обжарить мясо до корочки", "Добавить лук и морковь", "Залить водой, тушить 30 минут", "Добавить картофель", "Тушить до готовности картофеля", "Добавить чеснок и специи"] },
    { id: 11, name: "Блинчики с творогом", category: "dessert", time: 40, calories: 320, difficulty: "Средний", tags: ["блины", "десерт", "завтрак"], ingredients: ["500 мл молока", "2 яйца", "200 г муки", "2 ст.л. сахара", "300 г творога", "50 г изюма", "растительное масло"], steps: ["Взбить яйца с сахаром", "Добавить молоко и муку", "Жарить тонкие блины", "Смешать творог с изюмом", "Завернуть начинку в блины", "Обжарить с двух сторон"] },
    { id: 12, name: "Шарлотка с яблоками", category: "dessert", time: 50, calories: 280, difficulty: "Лёгкий", tags: ["пирог", "яблоки", "десерт"], ingredients: ["4 яйца", "1 стакан сахара", "1 стакан муки", "3 яблока", "1 ч.л. корицы", "щепотка ванилина"], steps: ["Взбить яйца с сахаром до пышной пены", "Аккуратно добавить муку", "Нарезать яблоки кубиками", "Добавить яблоки и корицу в тесто", "Вылить в форму, выпекать 35 минут при 180°C"] },
    { id: 13, name: "Тирамису", category: "dessert", time: 30, calories: 450, difficulty: "Сложный", tags: ["десерт", "итальянский", "без выпечки"], ingredients: ["200 г печенья савоярди", "250 г сыра маскарпоне", "2 яйца", "50 г сахара", "200 мл крепкого кофе", "какао-порошок"], steps: ["Сварить крепкий кофе", "Отделить желтки от белков", "Взбить желтки с сахаром, добавить маскарпоне", "Взбить белки, аккуратно смешать", "Обмакнуть печенье в кофе", "Собирать слоями, пересыпая какао", "Убрать в холодильник на 2 часа"] },
    { id: 14, name: "Цезарь с курицей", category: "salad", time: 30, calories: 380, difficulty: "Средний", tags: ["салат", "популярный", "праздничный"], ingredients: ["300 г куриного филе", "салат романо", "150 г помидоров черри", "50 г пармезана", "50 г сухариков", "соус цезарь"], steps: ["Обжарить куриное филе", "Нарвать салат руками", "Разрезать помидоры пополам", "Добавить сухарики", "Полить соусом", "Посыпать тертым пармезаном"] },
    { id: 15, name: "Греческий салат", category: "salad", time: 15, calories: 210, difficulty: "Лёгкий", tags: ["салат", "овощной", "быстро"], ingredients: ["2 огурца", "2 помидора", "1 болгарский перец", "150 г сыра фета", "100 г маслин", "оливковое масло", "орегано"], steps: ["Нарезать огурцы и помидоры кубиками", "Нарезать перец", "Добавить фету и маслины", "Заправить маслом и орегано"] },
    { id: 16, name: "Оливье", category: "salad", time: 40, calories: 350, difficulty: "Средний", tags: ["салат", "праздничный", "новогодний"], ingredients: ["4 картофелины", "2 моркови", "300 г вареной колбасы", "3 соленых огурца", "200 г консервированного горошка", "майонез"], steps: ["Отварить картофель и морковь", "Нарезать все ингредиенты кубиками", "Добавить горошек", "Заправить майонезом", "Посолить по вкусу"] },
    { id: 17, name: "Домашняя пицца", category: "baking", time: 90, calories: 520, difficulty: "Средний", tags: ["пицца", "тесто", "ужин"], ingredients: ["500 г муки", "7 г сухих дрожжей", "250 мл теплой воды", "2 ст.л. оливкового масла", "томатный соус", "200 г моцареллы", "колбаса, грибы"], steps: ["Замесить дрожжевое тесто", "Дать подойти в тепле (40 минут)", "Раскатать тесто", "Намазать соусом, выложить начинку", "Посыпать сыром", "Выпекать 20 минут при 220°C"] },
    { id: 18, name: "Банановый хлеб", category: "baking", time: 60, calories: 290, difficulty: "Лёгкий", tags: ["выпечка", "бананы", "десерт"], ingredients: ["2 спелых банана", "2 яйца", "150 г муки", "100 г сахара", "50 г сливочного масла", "1 ч.л. разрыхлителя", "щепотка соли"], steps: ["Размять бананы вилкой", "Смешать с яйцами и растопленным маслом", "Добавить сахар", "Всыпать муку и разрыхлитель", "Вылить в форму", "Выпекать 45 минут при 180°C"] },
    { id: 19, name: "Куриный суп с лапшой", category: "soup", time: 50, calories: 190, difficulty: "Лёгкий", tags: ["суп", "курица", "быстро"], ingredients: ["400 г куриных бедер", "100 г лапши", "1 морковь", "1 луковица", "2 картофелины", "зелень"], steps: ["Сварить бульон из курицы", "Добавить нарезанный картофель", "Пассеровать лук с морковью", "Добавить зажарку в суп", "Засыпать лапшу, варить 5 минут", "Добавить зелень"] },
    { id: 20, name: "Рис с овощами", category: "main", time: 35, calories: 280, difficulty: "Лёгкий", tags: ["вегетарианское", "гарнир", "быстро"], ingredients: ["1 стакан риса", "1 морковь", "1 болгарский перец", "100 г кукурузы", "100 г горошка", "соевый соус"], steps: ["Отварить рис до готовности", "Нарезать овощи", "Обжарить овощи на сковороде", "Смешать с рисом", "Добавить соевый соус"] },
    { id: 21, name: "Запеченная семга", category: "main", time: 35, calories: 340, difficulty: "Средний", tags: ["рыба", "полезно", "ужин"], ingredients: ["400 г семги", "1 лимон", "веточка розмарина", "2 ст.л. оливкового масла", "соль, перец"], steps: ["Посолить и поперчить рыбу", "Сбрызнуть оливковым маслом", "Выложить дольки лимона и розмарин", "Запекать 20 минут при 200°C"] },
    { id: 22, name: "Морковный торт", category: "dessert", time: 80, calories: 420, difficulty: "Сложный", tags: ["торт", "морковь", "десерт"], ingredients: ["300 г моркови", "200 г муки", "200 г сахара", "3 яйца", "150 мл растительного масла", "100 г грецких орехов", "200 г сливочного сыра для крема"], steps: ["Натереть морковь на мелкой терке", "Взбить яйца с сахаром", "Добавить масло, муку и разрыхлитель", "Добавить морковь и орехи", "Выпекать 35 минут при 180°C", "Остудить и пропитать кремом"] },
    { id: 23, name: "Смузи клубничный", category: "drinks", time: 5, calories: 150, difficulty: "Лёгкий", tags: ["напиток", "быстро", "полезно"], ingredients: ["200 г клубники (свежей или замороженной)", "1 банан", "100 мл йогурта", "50 мл апельсинового сока"], steps: ["Смешать все ингредиенты в блендере", "Взбить до однородности", "Разлить по стаканам"] },
    { id: 24, name: "Какао с маршмеллоу", category: "drinks", time: 10, calories: 180, difficulty: "Лёгкий", tags: ["напиток", "десерт", "уютный"], ingredients: ["500 мл молока", "2 ст.л. какао-порошка", "2 ст.л. сахара", "зефирки маршмеллоу"], steps: ["Подогреть молоко", "Смешать какао с сахаром", "Добавить немного молока, перемешать", "Влить в кастрюлю с молоком", "Варить 2-3 минуты", "Подавать с маршмеллоу"] },
    { id: 25, name: "Лимонный лимонад", category: "drinks", time: 10, calories: 120, difficulty: "Лёгкий", tags: ["напиток", "освежающий", "лето"], ingredients: ["2 лимона", "1 л воды", "3 ст.л. сахара", "мята", "лед"], steps: ["Выжать сок из лимонов", "Смешать с водой и сахаром", "Добавить мяту", "Подавать со льдом"] }
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

let activeTimer = null;
let timerInterval = null;

// ========== ФУНКЦИИ ==========

// Скрыть загрузочный экран
setTimeout(() => {
    if (loader) loader.classList.add('hide');
}, 800);

// Показать тост
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Сохранение избранного
function saveFavorites() {
    localStorage.setItem('cookbook_favorites', JSON.stringify(favorites));
    updateStats();
}

// Переключение избранного
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

// Проверка в избранном
function isFavorite(recipeId) {
    return favorites.includes(recipeId);
}

// Обновление статистики
function updateStats() {
    recipeCountSpan.textContent = recipes.length;
    favCountSpan.textContent = favorites.length;
}

// Поиск
function searchRecipes() {
    currentSearch = searchInput.value.toLowerCase();
    renderRecipes();
}

// Фильтрация по категории
function filterCategory(category, fromChip = false) {
    currentCategory = category;
    currentSearch = '';
    searchInput.value = '';
    
    // Обновить активную кнопку в навигации
    document.querySelectorAll('.nav__btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) btn.classList.add('active');
    });
    if (category === 'favorites') {
        document.getElementById('favoritesBtn').classList.add('active');
    }
    if (category === 'all') {
        document.querySelector('.nav__btn[data-category="all"]').classList.add('active');
    }
    
    // Обновить активный чип
    document.querySelectorAll('.chip').forEach(chip => {
        chip.classList.remove('active');
        if (chip.dataset.chip === category) chip.classList.add('active');
    });
    
    // Обновить заголовок
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
    categoryTitle.textContent = categoryNames[currentCategory] || 'Рецепты';
    
    renderRecipes();
}

// Показать избранное
function showFavorites() {
    currentCategory = 'favorites';
    currentSearch = '';
    searchInput.value = '';
    
    document.querySelectorAll('.nav__btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('favoritesBtn').classList.add('active');
    document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
    categoryTitle.textContent = 'Избранное ⭐';
    renderRecipes();
}

// Сортировка
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

// Рендер рецептов
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
        recipesContainer.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    recipesContainer.style.display = 'grid';
    emptyState.style.display = 'none';
    
    recipesContainer.innerHTML = filtered.map((recipe, idx) => `
        <div class="recipe-card" data-id="${recipe.id}" style="animation-delay: ${idx * 0.03}s">
            <div class="recipe-card__badge">${getDifficultyIcon(recipe.difficulty)} ${recipe.difficulty}</div>
            <div class="recipe-card__fav ${isFavorite(recipe.id) ? 'favorited' : ''}" onclick="event.stopPropagation(); toggleFavorite(${recipe.id})">
                ${isFavorite(recipe.id) ? '❤️' : '🤍'}
            </div>
            <div class="recipe-card__image" style="background-image: url('https://picsum.photos/id/${recipe.id + 100}/400/250?random=${Date.now()}')"></div>
            <div class="recipe-card__info">
                <h3 class="recipe-card__title">${recipe.name}</h3>
                <div class="recipe-card__meta">
                    <span>⏱️ ${recipe.time} мин</span>
                    <span>🔥 ${recipe.calories} ккал</span>
                </div>
                <div class="recipe-card__tags">
                    ${recipe.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            openModal(id);
        });
    });
}

function getDifficultyIcon(difficulty) {
    if (difficulty === 'Лёгкий') return '🟢';
    if (difficulty === 'Средний') return '🟡';
    return '🔴';
}

function openModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    stopTimer();
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${recipe.name}</h2>
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
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            
            <h3>👩‍🍳 Пошаговое приготовление</h3>
            <ol class="steps-list">
                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
            
            <div class="timer-section">
                <strong>⏰ Таймер для этого рецепта:</strong>
                <div class="timer-buttons">
                    <button class="timer-btn" onclick="startTimer(${recipe.time * 60})">▶️ Запустить таймер (${recipe.time} мин)</button>
                    <button class="timer-btn" onclick="stopTimer()">⏹️ Остановить</button>
                    <span id="modalTimerDisplay" class="timer-display"></span>
                </div>
            </div>
            
            <div class="recipe-card__tags">
                ${recipe.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
            
            <button class="timer-btn" id="modalFavBtn" style="background: ${isFavorite(recipe.id) ? '#ff6b6b' : 'rgba(255,255,255,0.1)'}; margin-top: 1rem; width: 100%;">
                ${isFavorite(recipe.id) ? '❤️ Убрать из избранного' : '🤍 Добавить в избранное'}
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    
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
            timerDisplay.textContent = '✅ Время вышло!';
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
    modal.style.display = 'none';
}

function handleSortChange() {
    currentSort = sortSelect.value;
    renderRecipes();
}

// Инициализация
function init() {
    updateStats();
    renderRecipes();
    
    searchBtn.addEventListener('click', searchRecipes);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchRecipes();
    });
    
    sortSelect.addEventListener('change', handleSortChange);
    
    document.querySelectorAll('.nav__btn').forEach(btn => {
        if (btn.id === 'favoritesBtn') {
            btn.addEventListener('click', showFavorites);
        } else if (btn.dataset.category) {
            btn.addEventListener('click', () => filterCategory(btn.dataset.category));
        }
    });
    
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => filterCategory(chip.dataset.chip, true));
    });
    
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
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

document.addEventListener('DOMContentLoaded', init);
