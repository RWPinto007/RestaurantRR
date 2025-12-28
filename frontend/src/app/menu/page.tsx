'use client';

import { useState } from 'react';
import Link from 'next/link';
import MenuItem from '../../components/MenuItem';

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState<keyof typeof menuCategories>('burgers');

    const menuCategories = {
        burgers: [
            { id: '1', name: 'Classic Cheeseburger', price: 9.99, description: 'Juicy beef patty with American cheese, lettuce, tomato, onion, and pickles.', image: '/images/burger1.jpg' },
            { id: '2', name: 'BBQ Bacon Burger', price: 12.99, description: 'Smoky BBQ sauce, crispy bacon, cheddar cheese, and onion rings.', image: '/images/burger2.jpg' },
            { id: '3', name: 'Mushroom Swiss Burger', price: 11.99, description: 'Sautéed mushrooms, Swiss cheese, garlic aioli, and fresh herbs.', image: '/images/burger3.jpg' },
            { id: '4', name: 'Spicy Jalapeño Burger', price: 10.99, description: 'Spicy jalapeños, pepper jack cheese, chipotle mayo, and lettuce.', image: '/images/burger4.jpg' },
            { id: '5', name: 'Veggie Burger', price: 8.99, description: 'Plant-based patty with avocado, sprouts, tomato, and vegan mayo.', image: '/images/burger5.jpg' },
        ],
        sides: [
            { id: '6', name: 'French Fries', price: 4.99, description: 'Crispy golden fries seasoned with sea salt.', image: '/images/fries.jpg' },
            { id: '7', name: 'Onion Rings', price: 5.99, description: 'Beer-battered onion rings with ranch dipping sauce.', image: '/images/onion-rings.jpg' },
            { id: '8', name: 'Sweet Potato Fries', price: 5.49, description: 'Oven-baked sweet potato fries with cinnamon sugar.', image: '/images/sweet-fries.jpg' },
            { id: '9', name: 'Coleslaw', price: 3.99, description: 'Creamy coleslaw with cabbage, carrots, and house dressing.', image: '/images/coleslaw.jpg' },
        ],
        drinks: [
            { id: '10', name: 'Coca-Cola', price: 2.99, description: 'Classic Coca-Cola in a chilled glass bottle.', image: '/images/coke.jpg' },
            { id: '11', name: 'Lemonade', price: 3.49, description: 'Freshly squeezed lemonade with mint.', image: '/images/lemonade.jpg' },
            { id: '12', name: 'Iced Tea', price: 2.99, description: 'Sweet or unsweet iced tea.', image: '/images/iced-tea.jpg' },
            { id: '13', name: 'Milkshake', price: 4.99, description: 'Thick and creamy vanilla milkshake.', image: '/images/milkshake.jpg' },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-red-600">Tio Waldner's Burger</h1>
                        <nav className="space-x-4">
                            <Link href="/" className="text-gray-600 hover:text-red-600">Home</Link>
                            <Link href="/menu" className="text-red-600 font-semibold">Menu</Link>
                            <Link href="/cart" className="text-gray-600 hover:text-red-600">Cart</Link>
                            <Link href="/login" className="text-gray-600 hover:text-red-600">Login</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Menu Content */}
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>

                {/* Category Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-1">
                        {Object.keys(menuCategories).map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category as keyof typeof menuCategories)}
                                className={`px-6 py-2 rounded-md font-semibold capitalize transition ${activeCategory === category
                                    ? 'bg-red-600 text-white'
                                    : 'text-gray-600 hover:text-red-600'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Items */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuCategories[activeCategory].map(item => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500">Image Placeholder</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-red-600">${item.price}</span>
                                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2025 Tio Waldner's Burger. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}