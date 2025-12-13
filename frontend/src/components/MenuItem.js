import React from 'react';
import { useCart } from '../hooks/useCart';

export default function MenuItem({ item }) {
  const { addToCart } = useCart();

  return (
    <div>
      <h4>{item.name}</h4>
      <p>${item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}
