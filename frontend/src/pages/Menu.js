import React, { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';
import api from '../services/api';

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await api.get('/menu');
        setMenu(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMenu();
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      {menu.map(item => <MenuItem key={item.id} item={item} />)}
    </div>
  );
}
