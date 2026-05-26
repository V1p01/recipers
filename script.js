// База рецептов (цены для Якутска)
const recipesData = [
    {
        id: 'lazy-vareniki',
        title: 'Ленивые вареники',
        emoji: '🥞',
        time: '10 мин',
        price: '180₽',
        difficulty: 'Легко',
        category: 'breakfast',
        description: 'Нежные творожные вареники за 10 минут',
        ingredients: [
            'Творог местный - 500 г - 120₽',
            'Яйцо - 1 шт - 15₽',
            'Мука - 5 ст. ложек - 10₽',
            'Сахар - 2 ст. ложки - 5₽',
            'Соль - щепотка',
            'Масло сливочное - 30 г - 30₽'
        ],
        instructions: [
            'Смешайте творог с яйцом, сахаром и солью',
            'Добавьте муку и замесите мягкое тесто',
            'Раскатайте колбаски и нарежьте кусочками',
            'Варите в кипящей воде 2-3 минуты после всплытия',
            'Подавайте со сметаной или вареньем'
        ],
        tip: 'Творог лучше брать местного производства — дешевле и вкуснее'
    },
    {
        id: 'tuna-pasta',
        title: 'Паста с тунцом',
        emoji: '🍝',
        time: '20 мин',
        price: '320₽',
        difficulty: 'Средне',
        category: 'lunch',
        description: 'Сытная паста с консервированным тунцом',
        ingredients: [
            'Макароны - 250 г - 45₽',
            'Тунец консервированный - 1 банка - 180₽',
            'Томатная паста - 2 ст. ложки - 25₽',
            'Лук - 1 шт - 10₽',
            'Чеснок - 2 зубчика - 10₽',
            'Масло растительное - 20₽',
            'Соль, перец - по вкусу'
        ],
        instructions: [
            'Отварите макароны до готовности',
            'Обжарьте мелко нарезанный лук и чеснок',
            'Добавьте томатную пасту и тунец, перемешайте',
            'Тушите соус 5-7 минут',
            'Смешайте с макаронами и прогрейте'
        ],
        tip: 'Консервы тунца можно найти по акции в крупных супермаркетах'
    },
    {
        id: 'rice-veggies',
        title: 'Рис с овощами',
        emoji: '🍚',
        time: '25 мин',
        price: '230₽',
        difficulty: 'Легко',
        category: 'lunch',
        description: 'Быстрый рис с замороженными овощами',
        ingredients: [
            'Рис - 1 стакан - 30₽',
            'Замороженные овощи - 300 г - 120₽',
            'Соевый соус - 2 ст. ложки - 20₽',
            'Яйца - 2 шт - 30₽',
            'Масло растительное - 10₽',
            'Специи - 20₽'
        ],
        instructions: [
            'Отварите рис до готовности',
            'Обжарьте замороженные овощи 5-7 минут',
            'Добавьте рис и соевый соус, перемешайте',
            'По желанию добавьте яйца и обжарьте',
            'Приправьте специями по вкусу'
        ],
        tip: 'Замороженные овощи в Якутске часто дешевле свежих, особенно зимой'
    },
    {
        id: 'potato-casserole',
        title: 'Картофельная запеканка',
        emoji: '🥔',
        time: '30 мин',
        price: '380₽',
        difficulty: 'Средне',
        category: 'dinner',
        description: 'Сырная запеканка с картофелем и сосисками',
        ingredients: [
            'Картофель - 7 шт - 140₽',
            'Сосиски - 4 шт - 120₽',
            'Сыр - 150 г - 90₽',
            'Яйца - 2 шт - 30₽',
            'Молоко - 100 мл - 15₽',
            'Соль, перец - по вкусу'
        ],
        instructions: [
            'Нарежьте картофель тонкими кружочками',
            'Выложите слоями картофель и нарезанные сосиски',
            'Залейте смесью яиц и молока',
            'Посыпьте тертым сыром',
            'Запекайте при 180°C 25-30 минут'
        ],
        tip: 'Картофель выгоднее покупать мешками на рынке'
    },
    {
        id: 'hot-sandwiches',
        title: 'Горячие бутерброды',
        emoji: '🥪',
        time: '5 мин',
        price: '140₽',
        difficulty: 'Легко',
        category: 'snack',
        description: 'Хрустящие бутерброды с сыром',
        ingredients: [
            'Хлеб - 4 куска - 30₽',
            'Сыр - 100 г - 60₽',
            'Колбаса - 100 г - 50₽',
            'Помидор - 1 шт - 25₽',
            'Майонез или кетчуп - 15₽'
        ],
        instructions: [
            'Смажьте хлеб соусом',
            'Выложите начинку: колбасу, помидоры',
            'Сверху положите сыр',
            'Разогрейте в микроволновке 1-2 минуты',
            'Подавайте горячими'
        ],
        tip: 'Хлеб лучше покупать в местных пекарнях — свежее и дешевле'
    },
    {
        id: 'eggs-tomatoes',
        title: 'Яичница с помидорами',
        emoji: '🍳',
        time: '7 мин',
        price: '120₽',
        difficulty: 'Легко',
        category: 'breakfast',
        description: 'Классическая глазунья с помидорами',
        ingredients: [
            'Яйца - 3 шт - 45₽',
            'Помидор - 1 шт - 25₽',
            'Лук - 1/2 шт - 10₽',
            'Масло растительное - 5₽',
            'Соль, перец - по вкусу',
            'Зелень - 15₽'
        ],
        instructions: [
            'Обжарьте нарезанный лук до золотистости',
            'Добавьте нарезанный помидор, жарьте 2 минуты',
            'Разбейте яйца на сковороду',
            'Жарьте на среднем огне до готовности',
            'Посолите, поперчите и посыпьте зеленью'
        ],
        tip: 'Для нежной яичницы накройте сковороду крышкой на 1-2 минуты'
    },
    {
        id: 'pancakes',
        title: 'Тонкие блины',
        emoji: '🥞',
        time: '20 мин',
        price: '130₽',
        difficulty: 'Средне',
        category: 'breakfast',
        description: 'Тонкие блинчики на молоке',
        ingredients: [
            'Молоко - 500 мл - 50₽',
            'Яйца - 2 шт - 30₽',
            'Мука - 200 г - 20₽',
            'Сахар - 2 ст. ложки - 5₽',
            'Масло растительное - 20₽',
            'Соль - щепотка'
        ],
        instructions: [
            'Смешайте яйца с сахаром и солью',
            'Добавьте молоко, постепенно всыпайте муку',
            'Влейте масло, перемешайте',
            'Жарьте на раскаленной сковороде',
            'Подавайте со сметаной или вареньем'
        ],
        tip: 'Местное молоко в Якутске вкусное и недорогое'
    },
    {
        id: 'buckwheat-meat',
        title: 'Гречка с мясом',
        emoji: '🍛',
        time: '35 мин',
        price: '350₽',
        difficulty: 'Средне',
        category: 'dinner',
        description: 'Сытная гречка с мясом и луком',
        ingredients: [
            'Гречка - 1 стакан - 40₽',
            'Мясо - 300 г - 250₽',
            'Лук - 2 шт - 20₽',
            'Морковь - 1 шт - 15₽',
            'Масло растительное - 15₽',
            'Соль, перец - по вкусу'
        ],
        instructions: [
            'Отварите гречку до готовности',
            'Обжарьте мясо кусочками до румяной корочки',
            'Добавьте лук и морковь, жарьте 5 минут',
            'Смешайте с гречкой, добавьте специи',
            'Тушите под крышкой 5-7 минут'
        ],
        tip: 'Мясо на рынке часто дешевле, чем в супермаркетах'
    },
    {
        id: 'omelette',
        title: 'Пышный омлет',
        emoji: '🥚',
        time: '10 мин',
        price: '100₽',
        difficulty: 'Легко',
        category: 'breakfast',
        description: 'Воздушный омлет с молоком',
        ingredients: [
            'Яйца - 4 шт - 60₽',
            'Молоко - 100 мл - 10₽',
            'Мука - 1 ст. ложка - 5₽',
            'Масло сливочное - 20 г - 20₽',
            'Соль - по вкусу',
            'Зелень - 5₽'
        ],
        instructions: [
            'Взбейте яйца с молоком и мукой',
            'Посолите по вкусу',
            'Вылейте на разогретую сковороду с маслом',
            'Жарьте под крышкой 5-7 минут',
            'Посыпьте зеленью и подавайте'
        ],
        tip: 'Яйца выгоднее покупать десятками на рынках Якутска'
    },
    {
        id: 'veggie-soup',
        title: 'Овощной суп',
        emoji: '🍲',
        time: '30 мин',
        price: '280₽',
        difficulty: 'Легко',
        category: 'soup',
        description: 'Легкий суп с замороженными овощами',
        ingredients: [
            'Замороженные овощи - 400 г - 160₽',
            'Картофель - 3 шт - 60₽',
            'Лук - 1 шт - 10₽',
            'Морковь - 1 шт - 15₽',
            'Масло растительное - 10₽',
            'Соль, специи - 25₽'
        ],
        instructions: [
            'Нарежьте картофель кубиками, залейте водой',
            'Доведите до кипения, варите 10 минут',
            'Обжарьте лук с морковью',
            'Добавьте замороженные овощи и зажарку',
            'Варите еще 10-15 минут до готовности'
        ],
        tip: 'Можно добавить куриный кубик для вкуса'
    },
    {
        id: 'macaroni-cheese',
        title: 'Макароны с сыром',
        emoji: '🧀',
        time: '15 мин',
        price: '200₽',
        difficulty: 'Легко',
        category: 'dinner',
        description: 'Макароны с сыром по-студенчески',
        ingredients: [
            'Макароны - 250 г - 45₽',
            'Сыр - 150 г - 90₽',
            'Молоко - 100 мл - 10₽',
            'Масло сливочное - 30 г - 30₽',
            'Соль - по вкусу',
            'Панировочные сухари - 25₽'
        ],
        instructions: [
            'Отварите макароны до готовности',
            'Смешайте с маслом и молоком',
            'Добавьте тертый сыр, перемешайте',
            'Посыпьте сухарями',
            'По желанию запеките 5 минут в духовке'
        ],
        tip: 'Местный сыр в Якутске отличного качества и доступный по цене'
    },
    {
        id: 'curd-pancakes',
        title: 'Сырники',
        emoji: '🧇',
        time: '15 мин',
        price: '170₽',
        difficulty: 'Средне',
        category: 'breakfast',
        description: 'Золотистые сырники из творога',
        ingredients: [
            'Творог - 400 г - 100₽',
            'Яйцо - 1 шт - 15₽',
            'Мука - 3 ст. ложки - 10₽',
            'Сахар - 2 ст. ложки - 5₽',
            'Масло растительное - 20₽',
            'Ванилин - 20₽'
        ],
        instructions: [
            'Смешайте творог с яйцом и сахаром',
            'Добавьте муку и ванилин, замесите тесто',
            'Сформируйте сырники',
            'Обваляйте в муке',
            'Жарьте на среднем огне до золотистой корочки'
        ],
        tip: 'Покупайте творог на рынке — там он вкуснее и дешевле'
    }
];

// Функция открытия модального окна с рецептом
function openRecipe(recipeId) {
    const recipe = recipesData.find(r => r.id === recipeId);
    if (!recipe) return;

    const modal = document.getElementById('recipeModal');
    const details = document.getElementById('recipeDetails');

    details.innerHTML = `
        <div style="text-align: center; font-size: 4rem; margin-bottom: 1rem;">${recipe.emoji}</div>
        <h2>${recipe.title}</h2>
        <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: #666; flex-wrap: wrap;">
            <span>⏱️ ${recipe.time}</span>
            <span>💰 ~${recipe.price}</span>
            <span>📊 ${recipe.difficulty}</span>
        </div>
        
        <h3>📝 Ингредиенты:</h3>
        <ul>
            ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        <h3>👨‍🍳 Приготовление:</h3>
        <ol>
            ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
        </ol>
        
        <div style="margin-top: 1.5rem; padding: 1rem; background: #FFF3F3; border-radius: 10px; border-left: 4px solid #FF6B6B;">
            <strong>💡 Совет:</strong> ${recipe.tip}
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Мобильное меню (работает на всех страницах)
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
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
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Закрытие модального окна
    const modal = document.getElementById('recipeModal');
    const closeModal = document.querySelector('.close-modal');

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Параллакс эффект
    document.addEventListener('mousemove', (e) => {
        const elements = document.querySelectorAll('.floating');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        elements.forEach((el, i) => {
            const speed = (i + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Фильтрация рецептов (если есть на странице)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            document.querySelectorAll('.recipe-card').forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});

console.log('🍳 Кулинария студента | Якутск');
console.log('📚 Загружено рецептов:', recipesData.length);
console.log('📄 Страниц: 6');
console.log('💰 Все цены актуальны для Якутска');
// ИЗБРАННОЕ (Firebase)
// Проверяем, есть ли Firebase
if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
    const db = firebase.firestore();
    
    // Добавить в избранное
    window.toggleFavorite = function(recipeId) {
        const user = firebase.auth().currentUser;
        if (!user) {
            alert('Войдите в аккаунт, чтобы добавлять в избранное!');
            window.location.href = 'auth.html';
            return;
        }
        
        const favRef = db.collection('users').doc(user.uid).collection('favorites').doc(recipeId);
        
        favRef.get().then((doc) => {
            if (doc.exists) {
                // Удаляем из избранного
                favRef.delete();
                updateFavButton(recipeId, false);
            } else {
                // Добавляем в избранное
                favRef.set({
                    recipeId: recipeId,
                    addedAt: new Date().toISOString()
                });
                updateFavButton(recipeId, true);
            }
        });
    };
    
    // Обновить вид кнопки
    function updateFavButton(recipeId, isFav) {
        const btn = document.querySelector(`[data-fav="${recipeId}"]`);
        if (btn) {
            btn.textContent = isFav ? '❤️' : '🤍';
        }
    }
    
    // Проверить избранное при загрузке
    window.checkFavorites = function() {
        const user = firebase.auth().currentUser;
        if (!user) return;
        
        db.collection('users').doc(user.uid).collection('favorites').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    updateFavButton(doc.id, true);
                });
            });
    };
}
