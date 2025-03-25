import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getAllCategories, getProductsByCategory, setSearchTerm } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';
import ProductFilter from './ProductFilter';
import CategoryFilter from './CategoryFilter';

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, categories, searchTerm, loading } = useSelector(state => state.products);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        dispatch(getProducts({ page: currentPage, limit: itemsPerPage }));
        dispatch(getAllCategories());
    }, [dispatch, currentPage]);

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        dispatch(getProductsByCategory(category));
    };

    const handleSearch = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory ? product.category === selectedCategory : true)
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="container mx-auto p-6">
            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <ProductFilter searchTerm={searchTerm} handleSearch={handleSearch} />
                <CategoryFilter categories={categories} selectedCategory={selectedCategory} handleCategoryFilter={handleCategoryFilter} />
            </div>

            {/* Products Grid */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
                    ))}
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {paginatedProducts.map(product => (
                            <Link to={`/product/${product.id}`} key={product.id} className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
                                <img  src={product.image} alt={product.title} className="h-48 w-full object-contain rounded-md"/>
                                <h3 className="mt-3 font-bold text-lg truncate">{product.title}</h3>
                                <p className="text-green-600 font-semibold">${product.price}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button key={page} onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                                {page}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductList;