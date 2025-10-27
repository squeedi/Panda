// Основной JavaScript файл для сайта PANDA

// Определение текущей страницы и применение соответствующих стилей
function initPageStyles() {
    const body = document.body;
    const currentPath = window.location.pathname;
    
    // Определяем, является ли это главной страницей
    if (currentPath === '/' || currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
        body.classList.add('home-page');
        body.classList.remove('other-page');
    } else {
        body.classList.add('other-page');
        body.classList.remove('home-page');
    }
    
    // Обновляем активные ссылки в навигации
    updateActiveNavLinks();
}

// Обновление активных ссылок в навигации
function updateActiveNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        if (href === 'index.html' && (currentPath === '/' || currentPath.endsWith('index.html'))) {
            link.classList.add('active');
        } else if (href && currentPath.includes(href.replace('.html', ''))) {
            link.classList.add('active');
        }
    });
}

// Плавная прокрутка к элементам
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Обработка кликов по товарам
function handleProductClicks() {
    const productCards = document.querySelectorAll('.product-card, .product-card-large');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.dataset.productId || '1';
            window.location.href = `pages/product-detail.html?id=${productId}`;
        });
    });
}

// Добавление товара в избранное
function addToFavorites() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    const badge = document.querySelector('.badge');
    
    // Загружаем количество избранных товаров из localStorage
    updateFavoritesCount();
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', async function(e) {
            e.preventDefault();
            
            const productId = this.dataset.productId || '1';
            
            try {
                const response = await window.API.addToFavorites(productId);
                if (response.success) {
                    updateFavoritesCount();
                    
                    // Добавляем анимацию
                    button.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        button.style.transform = 'scale(1)';
                    }, 200);
                    
                    // Показываем уведомление
                    showNotification('Товар добавлен в избранное!');
                } else {
                    throw new Error(response.error);
                }
            } catch (error) {
                showNotification('Ошибка: ' + error.message);
            }
        });
    });
}

// Обновление счетчика избранных товаров
function updateFavoritesCount() {
    const badge = document.querySelector('.badge');
    if (badge) {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        badge.textContent = favorites.length;
    }
}

// Показ уведомлений
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #000;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 14px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Удаление через 3 секунды
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Обработка форм
function handleForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить логику отправки формы
            showNotification('Форма отправлена!');
        });
    });
}

// Инициализация мобильного меню (если нужно)
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('mobile-open');
        });
    }
}

// Обработка изменения размера окна
function handleResize() {
    window.addEventListener('resize', function() {
        // Обновляем стили при изменении размера окна
        initPageStyles();
    });
}

// Инициализация всех функций
function init() {
    initPageStyles();
    smoothScroll();
    handleProductClicks();
    addToFavorites();
    handleForms();
    initMobileMenu();
    handleResize();
    
    // Обновляем счетчик избранного при загрузке
    updateFavoritesCount();
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', init);

// Экспорт функций для использования в других файлах
window.PANDA = {
    initPageStyles,
    updateActiveNavLinks,
    showNotification,
    addToFavorites
};
