'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Checkout() {
    const [deliveryInfo, setDeliveryInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        instructions: '',
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: '',
    });

    const [orderType, setOrderType] = useState('delivery');

    const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDeliveryInfo({
            ...deliveryInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentInfo({
            ...paymentInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle order submission
        alert('Order placed successfully!');
    };

    const cartItems = [
        { id: '1', name: 'Classic Cheeseburger', price: 9.99, quantity: 2 },
        { id: '2', name: 'French Fries', price: 4.99, quantity: 1 },
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.08;
    const deliveryFee = orderType === 'delivery' ? 2.99 : 0;
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
                            <Link href="/cart" className="text-gray-600 hover:text-red-600">Cart</Link>
                            <Link href="/checkout" className="text-red-600 font-semibold">Checkout</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Checkout Content */}
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Checkout</h1>

                <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Order Type */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold mb-4">Order Type</h2>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="orderType"
                                        value="delivery"
                                        checked={orderType === 'delivery'}
                                        onChange={(e) => setOrderType(e.target.value)}
                                        className="mr-2"
                                    />
                                    Delivery
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="orderType"
                                        value="pickup"
                                        checked={orderType === 'pickup'}
                                        onChange={(e) => setOrderType(e.target.value)}
                                        className="mr-2"
                                    />
                                    Pickup
                                </label>
                            </div>
                        </div>

                        {/* Delivery Information */}
                        {orderType === 'delivery' && (
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={deliveryInfo.name}
                                            onChange={handleDeliveryChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={deliveryInfo.email}
                                            onChange={handleDeliveryChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={deliveryInfo.phone}
                                            onChange={handleDeliveryChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={deliveryInfo.address}
                                            onChange={handleDeliveryChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={deliveryInfo.city}
                                            onChange={handleDeliveryChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            value={deliveryInfo.zipCode}
                                            onChange={handleDeliveryChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Instructions</label>
                                        <textarea
                                            name="instructions"
                                            value={deliveryInfo.instructions}
                                            onChange={handleDeliveryChange}
                                            rows={3}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                            placeholder="Any special instructions for delivery..."
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Payment Information */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        value={paymentInfo.cardNumber}
                                        onChange={handlePaymentChange}
                                        placeholder="1234 5678 9012 3456"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        value={paymentInfo.expiryDate}
                                        onChange={handlePaymentChange}
                                        placeholder="MM/YY"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        value={paymentInfo.cvv}
                                        onChange={handlePaymentChange}
                                        placeholder="123"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                                    <input
                                        type="text"
                                        name="nameOnCard"
                                        value={paymentInfo.nameOnCard}
                                        onChange={handlePaymentChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                            <div className="space-y-3 mb-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex justify-between">
                                        <span>{item.name} x{item.quantity}</span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            <hr className="my-4" />

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                {orderType === 'delivery' && (
                                    <div className="flex justify-between">
                                        <span>Delivery Fee</span>
                                        <span>${deliveryFee.toFixed(2)}</span>
                                    </div>
                                )}
                                <hr className="my-2" />
                                <div className="flex justify-between font-semibold text-lg">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition mt-6"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </form>
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