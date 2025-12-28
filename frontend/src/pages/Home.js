import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../components/MenuItem';

export default function Home() {
  const sampleItem = { name: 'Cheeseburger', price: 9.99 };

  return (
    <div>
      <h1>Welcome to Burger Restaurant</h1>
      <Link to="/menu">See Menu</Link>
      <div id="menu-items">
        <MenuItem item={sampleItem} />
      </div>
    </div>
  );
}
