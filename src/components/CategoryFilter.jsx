import React from 'react'

const CategoryFilter = ({ categories, selectedCategory, handleCategoryFilter }) => {
    return (
        <select value={selectedCategory} onChange={(e) => handleCategoryFilter(e.target.value)}
            className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">All Categories</option>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
}

export default CategoryFilter