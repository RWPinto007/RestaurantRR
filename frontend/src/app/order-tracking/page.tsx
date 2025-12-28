'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OrderTracking() {
    const [orderNumber, setOrderNumber] = useState('');
    const [orderStatus, setOrderStatus] = useState<{
        id: string;
        status: string;
        estimatedTime: string;
        items: { name: string; quantity: number }[];
        total: number;
        orderTime: string;
        deliveryAddress: string;
    } | null>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock order status - in real app, this would fetch from API
        if (orderNumber.trim()) {
            setOrderStatus({
                id: orderNumber,
                status: 'preparing',
                estimatedTime: '25-30 minutes',
                items: [
                    { name: 'Classic Cheeseburger', quantity: 2 },
                    { name: 'French Fries', quantity: 1 },
                    { name: 'Coca-Cola', quantity: 2 },
                ],
                total: 29.95,
                orderTime: '2:30 PM',
                deliveryAddress: '123 Main St, Anytown, ST 12345',
            });
        }
    };

    const statusSteps = [
        { key: 'received', label: 'Order Received', time: '2:32 PM' },
        { key: 'preparing', label: 'Preparing', time: '2:35 PM' },
        { key: 'ready', label: 'Ready for Delivery', time: 'Estimated 2:55 PM' },
        { key: 'delivered', label: 'Delivered', time: 'Estimated 3:05 PM' },
    ];

    const getStatusIndex = (status: string) => {
        const index = statusSteps.findIndex(step => step.key === status);
        return index;
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
                            <Link href="/menu" className="text-gray-600 hover:text-red-600">Menu</Link>
                            <Link href="/cart" className="text-gray-600 hover:text-red-600">Cart</Link>
                            <Link href="/order-tracking" className="text-red-600 font-semibold">Track Order</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Order Tracking Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>

                    {/* Search Form */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <form onSubmit={handleSearch} className="flex gap-4">
                            <input
                                type="text"
                                value={orderNumber}
                                onChange={(e) => setOrderNumber(e.target.value)}
                                placeholder="Enter your order number"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
                            >
                                Track Order
                            </button>
                        </form>
                    </div>

                    {/* Order Status */}
                    {orderStatus && (
                        <div className="space-y-6">
                            {/* Order Info */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-xl font-semibold">Order #{orderStatus.id}</h2>
                                        <p className="text-gray-600">Ordered at {orderStatus.orderTime}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-red-600">${orderStatus.total}</p>
                                        <p className="text-sm text-gray-600">Estimated: {orderStatus.estimatedTime}</p>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div className="border-t pt-4">
                                    <h3 className="font-semibold mb-2">Order Items:</h3>
                                    <ul className="space-y-1">
                                        {orderStatus.items.map((item, index) => (
                                            <li key={index} className="text-gray-600">
                                                {item.name} x{item.quantity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Delivery Address */}
                                <div className="border-t pt-4 mt-4">
                                    <h3 className="font-semibold mb-2">Delivery Address:</h3>
                                    <p className="text-gray-600">{orderStatus.deliveryAddress}</p>
                                </div>
                            </div>

                            {/* Status Timeline */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-semibold mb-6">Order Status</h2>

                                <div className="space-y-4">
                                    {statusSteps.map((step, index) => {
                                        const isCompleted = index <= getStatusIndex(orderStatus.status);
                                        const isCurrent = step.key === orderStatus.status;

                                        return (
                                            <div key={step.key} className="flex items-center">
                                                <div className={`w-4 h-4 rounded-full mr-4 ${isCompleted ? 'bg-green-500' : 'bg-gray-300'
                                                    }`}>
                                                    {isCompleted && (
                                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <p className={`font-semibold ${isCurrent ? 'text-red-600' : isCompleted ? 'text-green-600' : 'text-gray-500'}`}>
                                                        {step.label}
                                                    </p>
                                                    <p className="text-sm text-gray-500">{step.time}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Contact Support */}
                            <div className="bg-blue-50 rounded-lg p-6 text-center">
                                <h3 className="font-semibold text-blue-800 mb-2">Need Help?</h3>
                                <p className="text-blue-700 mb-4">
                                    If you have any questions about your order, please contact our support team.
                                </p>
                                <div className="space-x-4">
                                    <a href="tel:+1234567890" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                        Call Support
                                    </a>
                                    <a href="mailto:support@tiowaldners.com" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
                                        Email Support
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
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