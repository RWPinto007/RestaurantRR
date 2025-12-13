import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { cart } = useCart();
  const { auth } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/menu">Menu</Link> | 
      <Link to="/cart">Cart ({cart.length})</Link> | 
      {auth ? <span>Welcome</span> : <Link to="/login">Login</Link>}
    </nav>
  );
}
