import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { createOrder } from '../services/orderService';
import PaymentMethod from '../components/PaymentMethod';

export default function Checkout() {
  const { cart } = useCart();
  const [address, setAddress] = useState('');

  const handleCheckout = async () => {
    try {
      const order = await createOrder({ items: cart, deliveryInfo: { address, deliveryType: 'bike' } });
      console.log('Order created:', order);
      alert('Order placed successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to place order.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <input placeholder="Delivery Address" value={address} onChange={e => setAddress(e.target.value)} />
      <PaymentMethod />
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
}
