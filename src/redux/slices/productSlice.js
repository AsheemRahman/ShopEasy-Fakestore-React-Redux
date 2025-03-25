import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductById, fetchCategories, fetchProductsByCategory } from '../../services/api.js';

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async ({ page, limit }, { rejectWithValue }) => {
        try {
            return await fetchProducts(page, limit);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getProductById = createAsyncThunk(
    'products/getProductById',
    async (id, { rejectWithValue }) => {
        try {
            return await fetchProductById(id);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getAllCategories = createAsyncThunk(
    'products/getAllCategories',
    async (_, { rejectWithValue }) => {
        try {
            return await fetchCategories();
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getProductsByCategory = createAsyncThunk(
    'products/getProductsByCategory',
    async (category, { rejectWithValue }) => {
        try {
            return await fetchProductsByCategory(category);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        categories: [],
        selectedProduct: null,
        loading: false,
        error: null,
        page: 1,
        totalProducts: 0,
        searchTerm: ''
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.selectedProduct = action.payload;
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(getProductsByCategory.fulfilled, (state, action) => {
                state.products = action.payload;
            });
    }
});

export const { setSearchTerm, setPage } = productSlice.actions;
export default productSlice.reducer;