const API_URL = 'https://pet-shop-backend.slavab.kz';

export { API_URL };

export const fetchProducts = async () => {
    const response = await fetch(`${API_URL}/products/all`);
    return response.json();
};

// Другие функции для работы с API
