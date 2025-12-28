'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
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

    const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');

    const handleDeliveryChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setDeliveryInfo(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPaymentInfo(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('Order placed successfully!');
    };

    const cartItems = [
        { id: '1', name: 'Classic Cheeseburger', price: 9.99, quantity: 2 },
        { id: '2', name: 'French Fries', price: 4.99, quantity: 1 },
    ];

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const tax = subtotal * 0.08;
    const deliveryFee = orderType === 'delivery' ? 2.99 : 0;
    const total = subtotal + tax + deliveryFee;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-red-600">
                        Tio Waldner&apos;s Burger
                    </h1>
                    <nav className="space-x-4">
                        <Link href="/" className="text-gray-600 hover:text-red-600">
                            Home
                        </Link>
                        <Link href="/menu" className="text-gray-600 hover:text-red-600">
                            Menu
                        </Link>
                        <Link href="/cart" className="text-gray-600 hover:text-red-600">
                            Cart
                        </Link>
                        <Link href="/checkout" className="text-red-600 font-semibold">
                            Checkout
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Checkout Content */}
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Checkout</h1>

                <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <section className="space-y-6">
                        {/* Order Type */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold mb-4">Order Type</h2>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="delivery"
                                    checked={orderType === 'delivery'}
                                    onChange={() => setOrderType('delivery')}
                                />
                                Delivery
                            </label>
                            <label className="flex items-center gap-2 mt-2">
                                <input
                                    type="radio"
                                    value="pickup"
                                    checked={orderType === 'pickup'}
                                    onChange={() => setOrderType('pickup')}
                                />
                                Pickup
                            </label>
                        </div>

                        {/* Delivery Info */}
                        {orderType === 'delivery' && (
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-semibold mb-4">
                                    Delivery Information
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { label: 'Full Name', name: 'name', type: 'text' },
                                        { label: 'Email', name: 'email', type: 'email' },
                                        { label: 'Phone', name: 'phone', type: 'tel' },
                                        { label: 'City', name: 'city', type: 'text' },
                                        { label: 'ZIP Code', name: 'zipCode', type: 'text' },
                                    ].map(field => (
                                        <div key={field.name}>
                                            <label className="block text-sm font-medium mb-1">
                                                {field.label}
                                            </label>
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={(deliveryInfo as any)[field.name]}
                                                onChange={handleDeliveryChange}
                                                required
                                                className="w-full border px-3 py-2 rounded-md"
                                            />
                                        </div>
                                    ))}

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-1">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={deliveryInfo.address}
                                            onChange={handleDeliveryChange}
                                            required
                                            className="w-full border px-3 py-2 rounded-md"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-1">
                                            Delivery Instructions
                                        </label>
                                        <textarea
                                            name="instructions"
                                            value={deliveryInfo.instructions}
                                            onChange={handleDeliveryChange}
                                            rows={3}
                                            className="w-full border px-3 py-2 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Payment */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    className="md:col-span-2 border px-3 py-2 rounded-md"
                                    placeholder="Card Number"
                                    name="cardNumber"
                                    value={paymentInfo.cardNumber}
                                    onChange={handlePaymentChange}
                                    required
                                />
                                <input
                                    className="border px-3 py-2 rounded-md"
                                    placeholder="MM/YY"
                                    name="expiryDate"
                                    value={paymentInfo.expiryDate}
                                    onChange={handlePaymentChange}
                                    required
                                />
                                <input
                                    className="border px-3 py-2 rounded-md"
                                    placeholder="CVV"
                                    name="cvv"
                                    value={paymentInfo.cvv}
                                    onChange={handlePaymentChange}
                                    required
                                />
                                <input
                                    className="md:col-span-2 border px-3 py-2 rounded-md"
                                    placeholder="Name on Card"
                                    name="nameOnCard"
                                    value={paymentInfo.nameOnCard}
                                    onChange={handlePaymentChange}
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    {/* Order Summary */}
                    <aside className="bg-white rounded-lg shadow-sm p-6 h-fit">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between mb-2">
                                <span>
                                    {item.name} × {item.quantity}
                                </span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}

                        <hr className="my-4" />

                        <div className="space-y-1">
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
                                    <span>Delivery</span>
                                    <span>${deliveryFee.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="flex justify-between font-bold text-lg mt-2">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-6 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
                        >
                            Place Order
                        </button>
                    </aside>
                </form>
            </main>

            <footer className="bg-gray-800 text-white py-6 text-center mt-16">
                © 2025 Tio Waldner&apos;s Burger
            </footer>
        </div>
    );
}
