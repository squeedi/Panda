// JavaScript для страницы продукции

// Данные товаров (в реальном проекте будут загружаться с сервера)
const productsData = [
    { id: 1, name: 'Товар 1', size: 'Размер 1', price: '100 BYN', image: 'product1.jpg' },
    { id: 2, name: 'Товар 2', size: 'Размер 2', price: ' BYN', image: 'product2.jpg' },
    { id: 3, name: 'Товар 3', size: 'Размер 3', price: ' BYN', image: 'product3.jpg' },
    { id: 4, name: 'Товар 4', size: 'Размер 4', price: ' BYN', image: 'product4.jpg' },
    { id: 5, name: 'Товар 5', size: 'Размер 5', price: ' BYN', image: 'product5.jpg' },
    { id: 6, name: 'Товар 6', size: 'Размер 6', price: ' BYN', image: 'product6.jpg' },
    { id: 7, name: 'Товар 7', size: 'Размер 7', price: ' BYN', image: 'product7.jpg' },
    { id: 8, name: 'Товар 8', size: 'Размер 8', price: ' BYN', image: 'product8.jpg' },
    { id: 9, name: 'Товар 9', size: 'Размер 9', price: ' BYN', image: 'product9.jpg' },
    { id: 10, name: 'Товар 10', size: 'Размер 10', price: ' BYN', image: 'product10.jpg' },
    { id: 11, name: 'Товар 11', size: 'Размер 11', price: ' BYN', image: 'product11.jpg' },
    { id: 12, name: 'Товар 12', size: 'Размер 12', price: ' BYN', image: 'product12.jpg' }
];

let currentPage = 1;
const productsPerPage = 6;

// Инициализация страницы продукции
async function initProductsPage() {
    if (document.querySelector('.products-page')) {
        await loadProducts();
        initPagination();
        handleProductClicks();
    }
}

// Загрузка товаров на страницу
async function loadProducts() {
    const productsGrid = document.querySelector('.products-grid-large');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;

    productsData.slice(start, end).forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card-large';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.size}</p>
                <p>${product.price}</p>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Создание карточки товара
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card-large';
    card.dataset.productId = product.id;
    
    card.innerHTML = `
        <div class="product-placeholder-large">
            ${product.name}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.size}</p>
        </div>
    `;
    
    return card;
}

// Инициализация пагинации
async function initPagination() {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;
    
    try {
        const response = await window.API.getProductsCount();
        const totalProducts = response.success ? response.data.count : productsData.length;
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        
        paginationContainer.innerHTML = '';
        
        // Кнопка "Назад"
        if (currentPage > 1) {
            const prevBtn = createPaginationButton('<', currentPage - 1);
            paginationContainer.appendChild(prevBtn);
        }
        
        // Номера страниц
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = createPaginationButton(i, i);
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            paginationContainer.appendChild(pageBtn);
        }
        
        // Кнопка "Вперед"
        if (currentPage < totalPages) {
            const nextBtn = createPaginationButton('>', currentPage + 1);
            paginationContainer.appendChild(nextBtn);
        }
    } catch (error) {
        console.error('Ошибка загрузки пагинации:', error);
    }
}

// Создание кнопки пагинации
function createPaginationButton(text, page) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = 'pagination-btn';
    
    button.addEventListener('click', async () => {
        currentPage = page;
        await loadProducts();
        await initPagination();
        
        // Прокрутка к началу страницы
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    return button;
}

// Обработка кликов по товарам
function handleProductClicks() {
    document.addEventListener('click', function(e) {
        const productCard = e.target.closest('.product-card-large');
        if (productCard) {
            const productId = productCard.dataset.productId;
            window.location.href = `product-detail.html?id=${productId}`;
        }
    });
}

// Загрузка товара по ID (для страницы деталей товара)
async function loadProductById(id) {
    try {
        const response = await window.API.getProductById(id);
        if (response.success) {
            return response.data;
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        console.error('Ошибка загрузки товара:', error);
        return null;
    }
}

// Инициализация страницы деталей товара
async function initProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        const product = await loadProductById(productId);
        if (product) {
            displayProductDetail(product);
        } else {
            showError('Товар не найден');
        }
    }
}

// Отображение деталей товара
function displayProductDetail(product) {
    const productImage = document.querySelector('.product-image');
    const productTitle = document.querySelector('.product-details h1');
    const productPrice = document.querySelector('.product-details .price');
    
    if (productImage) {
        productImage.innerHTML = product.name;
    }
    
    if (productTitle) {
        productTitle.textContent = product.name;
    }
    
    if (productPrice) {
        productPrice.textContent = product.price;
    }
}

// Показ ошибки
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ff4757;
        color: white;
        padding: 20px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 16px;
    `;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        document.body.removeChild(errorDiv);
    }, 3000);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initProductsPage();
    initProductDetailPage();
});

// Экспорт функций
window.Products = {
    initProductsPage,
    loadProductById,
    initProductDetailPage
};
