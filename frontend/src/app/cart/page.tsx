'use client';

import { useState } from 'react';
import Link from 'next/link';
import CartItem from '../../components/CartItem';

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: '1', name: 'Classic Cheeseburger', price: 9.99, quantity: 2 },
        { id: '2', name: 'French Fries', price: 4.99, quantity: 1 },
        { id: '3', name: 'Coca-Cola', price: 2.99, quantity: 2 },
    ]);

    const updateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity === 0) {
            setCartItems(cartItems.filter(item => item.id !== id));
        } else {
            setCartItems(cartItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const removeItem = (id: string) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.08; // 8% tax
    const deliveryFee = 2.99;
    const total = subtotal + tax + deliveryFee;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-red-600">Tio Waldner's Burger</h1>
                        <nav className="space-x-4">
                            <Link href="/" className="text-gray-600 hover:text-red-600">Home</Link>
                            <Link href="/menu" className="text-gray-600 hover:text-red-600">Menu</Link>
                            <Link href="/cart" className="text-red-600 font-semibold">Cart ({cartItems.length})</Link>
                            <Link href="/login" className="text-gray-600 hover:text-red-600">Login</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Cart Content */}
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
                        <Link href="/menu" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                            Browse Menu
                        </Link>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-sm">
                                {cartItems.map(item => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onUpdateQuantity={updateQuantity}
                                        onRemove={removeItem}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tax</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Delivery Fee</span>
                                        <span>${deliveryFee.toFixed(2)}</span>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex justify-between font-semibold text-lg">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Link href="/checkout" className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition block text-center">
                                    Proceed to Checkout
                                </Link>

                                <Link href="/menu" className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition block text-center mt-2">
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
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