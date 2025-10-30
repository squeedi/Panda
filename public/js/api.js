// API для работы с товарами (симуляция)

// Базовый URL API (в реальном проекте будет настоящий URL)
const API_BASE_URL = '/api';

// Симуляция задержки сети
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Данные товаров (в реальном проекте будут загружаться с сервера)
const mockProducts = [
    { id: 1, name: 'Товар 1', size: 'Размер 1', price: 1000, image: 'product1.jpg', description: 'Описание товара 1' },
    { id: 2, name: 'Товар 2', size: 'Размер 2', price: 1200, image: 'product2.jpg', description: 'Описание товара 2' },
    { id: 3, name: 'Товар 3', size: 'Размер 3', price: 1500, image: 'product3.jpg', description: 'Описание товара 3' },
    { id: 4, name: 'Товар 4', size: 'Размер 4', price: 1800, image: 'product4.jpg', description: 'Описание товара 4' },
    { id: 5, name: 'Товар 5', size: 'Размер 5', price: 2000, image: 'product5.jpg', description: 'Описание товара 5' },
    { id: 6, name: 'Товар 6', size: 'Размер 6', price: 2200, image: 'product6.jpg', description: 'Описание товара 6' },
    { id: 7, name: 'Товар 7', size: 'Размер 7', price: 2500, image: 'product7.jpg', description: 'Описание товара 7' },
    { id: 8, name: 'Товар 8', size: 'Размер 8', price: 2800, image: 'product8.jpg', description: 'Описание товара 8' },
    { id: 9, name: 'Товар 9', size: 'Размер 9', price: 3000, image: 'product9.jpg', description: 'Описание товара 9' },
    { id: 10, name: 'Товар 10', size: 'Размер 10', price: 3200, image: 'product10.jpg', description: 'Описание товара 10' },
    { id: 11, name: 'Товар 11', size: 'Размер 11', price: 3500, image: 'product11.jpg', description: 'Описание товара 11' },
    { id: 12, name: 'Товар 12', size: 'Размер 12', price: 3800, image: 'product12.jpg', description: 'Описание товара 12' },
    { id: 13, name: 'Товар 13', size: 'Размер 13', price: 4000, image: 'product13.jpg', description: 'Описание товара 13' },
    { id: 14, name: 'Товар 14', size: 'Размер 14', price: 4200, image: 'product14.jpg', description: 'Описание товара 14' },
    { id: 15, name: 'Товар 15', size: 'Размер 15', price: 4500, image: 'product15.jpg', description: 'Описание товара 15' },
    { id: 16, name: 'Товар 16', size: 'Размер 16', price: 4800, image: 'product16.jpg', description: 'Описание товара 16' },
    { id: 17, name: 'Товар 17', size: 'Размер 17', price: 5000, image: 'product17.jpg', description: 'Описание товара 17' },
    { id: 18, name: 'Товар 18', size: 'Размер 18', price: 5200, image: 'product18.jpg', description: 'Описание товара 18' }
];

// Получение товаров с пагинацией
async function getProducts(page = 1, limit = 6) {
    try {
        // Симуляция задержки сети
        await delay(500);
        
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const products = mockProducts.slice(startIndex, endIndex);
        
        return {
            success: true,
            data: {
                products: products,
                total: mockProducts.length,
                page: page,
                limit: limit,
                totalPages: Math.ceil(mockProducts.length / limit)
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Получение товара по ID
async function getProductById(id) {
    try {
        await delay(300);
        
        const product = mockProducts.find(p => p.id == id);
        
        if (product) {
            return {
                success: true,
                data: product
            };
        } else {
            return {
                success: false,
                error: 'Товар не найден'
            };
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Получение общего количества товаров
async function getProductsCount() {
    try {
        await delay(200);
        
        return {
            success: true,
            data: {
                count: mockProducts.length
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Поиск товаров
async function searchProducts(query, page = 1, limit = 6) {
    try {
        await delay(400);
        
        const filteredProducts = mockProducts.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
        
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const products = filteredProducts.slice(startIndex, endIndex);
        
        return {
            success: true,
            data: {
                products: products,
                total: filteredProducts.length,
                page: page,
                limit: limit,
                totalPages: Math.ceil(filteredProducts.length / limit)
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Фильтрация товаров по цене
async function filterProductsByPrice(minPrice, maxPrice, page = 1, limit = 6) {
    try {
        await delay(400);
        
        const filteredProducts = mockProducts.filter(product => 
            product.price >= minPrice && product.price <= maxPrice
        );
        
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const products = filteredProducts.slice(startIndex, endIndex);
        
        return {
            success: true,
            data: {
                products: products,
                total: filteredProducts.length,
                page: page,
                limit: limit,
                totalPages: Math.ceil(filteredProducts.length / limit)
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Сортировка товаров
async function sortProducts(sortBy, order = 'asc', page = 1, limit = 6) {
    try {
        await delay(400);
        
        let sortedProducts = [...mockProducts];
        
        switch (sortBy) {
            case 'name':
                sortedProducts.sort((a, b) => {
                    if (order === 'asc') {
                        return a.name.localeCompare(b.name);
                    } else {
                        return b.name.localeCompare(a.name);
                    }
                });
                break;
            case 'price':
                sortedProducts.sort((a, b) => {
                    if (order === 'asc') {
                        return a.price - b.price;
                    } else {
                        return b.price - a.price;
                    }
                });
                break;
            default:
                break;
        }
        
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const products = sortedProducts.slice(startIndex, endIndex);
        
        return {
            success: true,
            data: {
                products: products,
                total: sortedProducts.length,
                page: page,
                limit: limit,
                totalPages: Math.ceil(sortedProducts.length / limit)
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Добавление товара в избранное
async function addToFavorites(productId) {
    try {
        await delay(200);
        
        // В реальном проекте здесь будет запрос к серверу
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        if (!favorites.includes(productId)) {
            favorites.push(productId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        
        return {
            success: true,
            data: { favorites: favorites }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Удаление товара из избранного
async function removeFromFavorites(productId) {
    try {
        await delay(200);
        
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const updatedFavorites = favorites.filter(id => id != productId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        
        return {
            success: true,
            data: { favorites: updatedFavorites }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Получение избранных товаров
async function getFavorites() {
    try {
        await delay(200);
        
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const favoriteProducts = mockProducts.filter(product => 
            favorites.includes(product.id)
        );
        
        return {
            success: true,
            data: favoriteProducts
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Экспорт API функций
window.API = {
    getProducts,
    getProductById,
    getProductsCount,
    searchProducts,
    filterProductsByPrice,
    sortProducts,
    addToFavorites,
    removeFromFavorites,
    getFavorites
};


