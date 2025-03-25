import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async (page = 1, limit = 20) => {
    try {
        const response = await axios.get(`${BASE_URL}/products`, {
            params: { limit : 20, page: page - 1 }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const fetchProductsByCategory = async (category) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/category/${category}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
};