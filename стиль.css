/* ============================================
   КУЛИНАРНАЯ КНИГА - СТИЛИ
   Профессиональная адаптивная вёрстка
   ============================================ */

/* ----- ПЕРЕМЕННЫЕ ----- */
:root {
    --color-primary: #e74c3c;
    --color-primary-dark: #c0392b;
    --color-primary-light: #ff6b6b;
    --color-secondary: #f39c12;
    --color-secondary-dark: #e67e22;
    --color-dark: #2c3e50;
    --color-dark-light: #34495e;
    --color-gray: #7f8c8d;
    --color-gray-light: #ecf0f1;
    --color-bg: #f9f5f0;
    --color-white: #ffffff;
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
    --shadow-md: 0 5px 20px rgba(0,0,0,0.08);
    --shadow-lg: 0 15px 35px rgba(0,0,0,0.12);
    --shadow-hover: 0 20px 40px rgba(0,0,0,0.15);
    --radius-sm: 12px;
    --radius-md: 20px;
    --radius-lg: 30px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ----- RESET & БАЗА ----- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--color-bg);
    color: var(--color-dark);
    line-height: 1.6;
    scroll-behavior: smooth;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* ----- АНИМАЦИИ ----- */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}

@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

.fade-in {
    animation: fadeIn 0.5s ease forwards;
}

/* ----- HEADER ----- */
.header {
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
    color: var(--color-white);
    padding: 1.2rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: var(--shadow-md);
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.logo__icon {
    font-size: 2.5rem;
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
}

.logo__text h1 {
    font-size: 1.6rem;
    letter-spacing: -0.5px;
}

.logo__text p {
    font-size: 0.8rem;
    opacity: 0.9;
}

.search {
    display: flex;
    gap: 0.5rem;
    flex: 1;
    max-width: 450px;
}

.search__input {
    flex: 1;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 50px;
    font-size: 0.95rem;
    outline: none;
    font-family: inherit;
    transition: var(--transition);
}

.search__input:focus {
    box-shadow: 0 0 0 3px rgba(243, 156, 18, 0.3);
}

.search__btn {
    background: var(--color-secondary);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    cursor: pointer;
    color: var(--color-white);
    font-weight: 600;
    transition: var(--transition);
}

.search__btn:hover {
    background: var(--color-secondary-dark);
    transform: scale(1.02);
}

/* ----- NAVIGATION ----- */
.nav {
    background: var(--color-dark);
    padding: 0.8rem 0;
    position: sticky;
    top: 80px;
    z-index: 999;
    box-shadow: var(--shadow-sm);
}

.nav__container {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.nav__btn {
    background: none;
    border: none;
    color: var(--color-white);
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    border-radius: 30px;
    transition: var(--transition);
    font-size: 0.9rem;
    font-weight: 500;
    font-family: inherit;
}

.nav__btn:hover {
    background: var(--color-primary);
    transform: translateY(-2px);
}

.nav__btn.active {
    background: var(--color-primary);
    box-shadow: var(--shadow-sm);
}

/* ----- HERO ----- */
.hero {
    background: linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark));
    border-radius: var(--radius-lg);
    padding: 3rem;
    margin: 2rem 0;
    color: var(--color-white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.hero__content {
    flex: 1;
}

.hero__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.hero__accent {
    background: rgba(255,255,255,0.2);
    padding: 0.1rem 0.5rem;
    border-radius: 20px;
    display: inline-block;
}

.hero__text {
    font-size: 1.1rem;
    opacity: 0.95;
    max-width: 500px;
}

.hero__stats {
    display: flex;
    gap: 3rem;
    background: rgba(255,255,255,0.15);
    padding: 1.5rem 2rem;
    border-radius: var(--radius-md);
    backdrop-filter: blur(10px);
}

.stat {
    text-align: center;
}

.stat__number {
    font-size: 2rem;
    font-weight: 700;
    display: block;
}

.stat__label {
    font-size: 0.85rem;
    opacity: 0.9;
}

/* ----- SECTION TITLE ----- */
.recipes__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
}

.section-title {
    font-size: 1.8rem;
    color: var(--color-dark);
    border-left: 4px solid var(--color-primary);
    padding-left: 1rem;
}

.sort {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.sort__label {
    color: var(--color-gray);
    font-size: 0.9rem;
}

.sort__select {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: var(--radius-sm);
    background: var(--color-white);
    font-family: inherit;
    cursor: pointer;
    outline: none;
}

.sort__select:focus {
    border-color: var(--color-primary);
}

/* ----- СЕТКА РЕЦЕПТОВ ----- */
.recipes__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2rem;
}

.recipe-card {
    background: var(--color-white);
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
    cursor: pointer;
    position: relative;
    animation: fadeIn 0.5s ease;
}

.recipe-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
}

.recipe-card__badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: var(--color-primary);
    color: var(--color-white);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 2;
}

.recipe-card__fav {
    position: absolute;
    top: 15px;
    left: 15px;
    background: rgba(255,255,255,0.95);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.3rem;
    transition: var(--transition);
    z-index: 2;
    box-shadow: var(--shadow-sm);
}

.recipe-card__fav:hover {
    transform: scale(1.1);
}

.recipe-card__image {
    width: 100%;
    height: 220px;
    background-size: cover;
    background-position: center;
    background-color: var(--color-gray-light);
    transition: var(--transition);
}

.recipe-card:hover .recipe-card__image {
    transform: scale(1.02);
}

.recipe-card__info {
    padding: 1.5rem;
}

.recipe-card__title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--color-primary);
}

.recipe-card__meta {
    display: flex;
    gap: 1rem;
    margin: 0.8rem 0;
    font-size: 0.85rem;
    color: var(--color-gray);
}

.recipe-card__meta span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
}

.recipe-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.8rem;
}

.tag {
    background: var(--color-gray-light);
    padding: 0.2rem 0.7rem;
    border-radius: 20px;
    font-size: 0.7rem;
    color: var(--color-dark);
    font-weight: 500;
}

/* ----- ПУСТОЕ СОСТОЯНИЕ ----- */
.empty-state {
    text-align: center;
    padding: 4rem 2rem;
    background: var(--color-white);
    border-radius: var(--radius-lg);
}

.empty-state__icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.empty-state h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--color-gray);
}

.empty-state p {
    color: var(--color-gray);
}

/* ----- МОДАЛЬНОЕ ОКНО ----- */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.85);
    z-index: 2000;
    overflow-y: auto;
    backdrop-filter: blur(5px);
}

.modal__content {
    max-width: 800px;
    margin: 2rem auto;
    background: var(--color-white);
    border-radius: var(--radius-lg);
    position: relative;
    animation: slideIn 0.3s ease;
}

.modal__close {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-white);
    z-index: 10;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.modal__close:hover {
    background: rgba(255,255,255,0.2);
}

.modal-header {
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
    color: var(--color-white);
    padding: 2rem;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.modal-header h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    padding-right: 2rem;
}

.modal-body {
    padding: 2rem;
}

.nutrition {
    background: var(--color-gray-light);
    padding: 1.2rem;
    border-radius: var(--radius-sm);
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
}

.nutrition-item {
    text-align: center;
}

.nutrition-value {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-primary);
}

.ingredients-list, .steps-list {
    margin: 1rem 0 1.5rem 1.5rem;
}

.ingredients-list li, .steps-list li {
    margin: 0.8rem 0;
    line-height: 1.5;
}

.timer-section {
    background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
    padding: 1.2rem;
    border-radius: var(--radius-sm);
    margin: 1.5rem 0;
}

.timer-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 1rem 0;
}

.timer-btn {
    background: var(--color-primary);
    color: var(--color-white);
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 30px;
    cursor: pointer;
    font-family: inherit;
    font-weight: 600;
    transition: var(--transition);
}

.timer-btn:hover {
    background: var(--color-primary-dark);
    transform: scale(1.02);
}

.timer-display {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: monospace;
    margin-left: 1rem;
}

.fav-modal-btn {
    width: 100%;
    margin-top: 1.5rem;
    padding: 1rem;
    border: none;
    border-radius: var(--radius-sm);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    font-family: inherit;
}

/* ----- ПОДВАЛ ----- */
.footer {
    background: var(--color-dark);
    color: var(--color-white);
    margin-top: 4rem;
}

.footer__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 3rem 2rem;
}

.footer__logo {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.footer__text {
    opacity: 0.8;
    max-width: 300px;
}

.footer__links {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
}

.footer__col h4 {
    margin-bottom: 1rem;
    font-size: 1rem;
}

.footer__col ul {
    list-style: none;
}

.footer__col li {
    margin-bottom: 0.5rem;
}

.footer__col a {
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    transition: var(--transition);
}

.footer__col a:hover {
    color: var(--color-secondary);
}

.footer__bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 1.5rem 0;
    text-align: center;
    font-size: 0.85rem;
    opacity: 0.7;
}

/* ----- АДАПТИВНОСТЬ ----- */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
    
    .header__container {
        flex-direction: column;
        text-align: center;
    }
    
    .search {
        max-width: 100%;
        width: 100%;
    }
    
    .nav {
        top: 105px;
    }
    
    .nav__container {
        justify-content: center;
    }
    
    .hero {
        flex-direction: column;
        text-align: center;
        padding: 2rem;
    }
    
    .hero__title {
        font-size: 1.8rem;
    }
    
    .hero__stats {
        width: 100%;
        justify-content: center;
    }
    
    .recipes__header {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .recipes__grid {
        grid-template-columns: 1fr;
    }
    
    .modal__content {
        margin: 1rem;
        width: calc(100% - 2rem);
    }
    
    .modal-header h2 {
        font-size: 1.4rem;
    }
    
    .footer__container {
        flex-direction: column;
        text-align: center;
    }
    
    .footer__links {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .hero__stats {
        flex-direction: column;
        gap: 1rem;
    }
    
    .recipe-card__meta {
        flex-wrap: wrap;
    }
    
    .timer-buttons {
        flex-direction: column;
    }
}

/* ----- SKELETON LOADER ----- */
.skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: var(--radius-sm);
}
