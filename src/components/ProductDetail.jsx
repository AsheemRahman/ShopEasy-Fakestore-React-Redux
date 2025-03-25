import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, getProductsByCategory } from '../redux/slices/productSlice';
import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedProduct, products } = useSelector(state => state.products);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (selectedProduct) {
            dispatch(getProductsByCategory(selectedProduct.category));
        }
    }, [dispatch, selectedProduct]);

    if (!selectedProduct) {
        return (
            <div className="flex justify-center items-center h-150">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-600"></div>
            </div>
        );
    }

    const relatedProducts = products.filter(p => p.id !== selectedProduct.id).slice(0, 4);

    const handleQuantityChange = (change) => {
        setQuantity(Math.max(1, quantity + change));
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-2 gap-8 p-6">
                {/* Product Image */}
                <div className="flex items-center justify-center bg-brand-light rounded-lg p-8">
                    <img src={selectedProduct.image} alt={selectedProduct.title} className="max-h-96 object-contain"/>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-brand-dark mb-2">
                            {selectedProduct.title}
                        </h1>
                        <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-3xl font-bold text-brand-secondary">
                            ${selectedProduct.price}
                        </span>
                        <div className="flex items-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={24}  fill={i < Math.round(selectedProduct.rating.rate) ? 'currentColor' : 'none'}  strokeWidth={1} className="text-yellow-500"/>
                            ))}
                            <span className="ml-2 text-gray-600">
                                ({selectedProduct.rating.count} reviews)
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center border rounded-full">
                            <button onClick={() => handleQuantityChange(-1)} className="px-4 py-2 text-gray-600 ">
                                -
                            </button>
                            <span className="px-4 py-2">{quantity}</span>
                            <button onClick={() => handleQuantityChange(1)} className="px-4 py-2 text-gray-600 ">
                                +
                            </button>
                        </div>
                        <button className=" flex items-center px-6 py-3  hover:bg-brand-primary text-white  rounded-full bg-blue-700  transition duration-300">
                            <ShoppingCart className="mr-2" size={20} />
                            Add to Cart
                        </button>
                        <button className="p-3 border rounded-full  text-gray-600 hover:bg-gray-100 transition duration-300">
                            <Heart size={20} />
                        </button>
                    </div>

                    <div className="border-t pt-4">
                        <p className="text-gray-600">
                            <strong>Category:</strong> {selectedProduct.category}
                        </p>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="bg-brand-light py-8">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                    <div className="grid grid-cols-4 gap-6">
                        {relatedProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-lg shadow-card p-4 hover:shadow-hover transition duration-300">
                                <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
                                <h3 className="font-semibold line-clamp-2 mb-2">
                                    {product.title}
                                </h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-brand-secondary font-bold">
                                        ${product.price}
                                    </span>
                                    <div className="flex items-center text-yellow-500">
                                        <Star size={16} fill="currentColor" />
                                        <span className="ml-1">{product.rating.rate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;