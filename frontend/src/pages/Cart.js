import React from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => <CartItem key={item.id} item={item} />)
      )}
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}
