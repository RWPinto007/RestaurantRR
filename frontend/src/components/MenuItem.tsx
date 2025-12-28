'use client';

import React from 'react';
import { useCart } from '../hooks/useCart';

interface MenuItemProps {
    item: {
        id: string;
        name: string;
        price: number;
        description?: string;
        image?: string;
    };
}

export default function MenuItem({ item }: MenuItemProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            ...item,
            quantity: 1,
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-500">Image Placeholder</span>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                {item.description && (
                    <p className="text-gray-600 mb-4">{item.description}</p>
                )}
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">${item.price}</span>
                    <button
                        onClick={handleAddToCart}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}