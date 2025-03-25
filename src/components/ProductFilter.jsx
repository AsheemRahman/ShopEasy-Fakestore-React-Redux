import React from 'react'

const ProductFilter = ({ searchTerm, handleSearch }) => {
    return (
        <input type="text" placeholder="Search products..." value={searchTerm} onChange={handleSearch}
            className="w-full md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
    );
}

export default ProductFilter