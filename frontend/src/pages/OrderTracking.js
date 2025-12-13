import React, { useEffect, useState } from 'react';
import { getOrderById } from '../services/orderService';
import DeliveryMap from '../components/DeliveryMap';

export default function OrderTracking({ orderId }) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const data = await getOrderById(orderId);
        setOrder(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchOrder();
  }, [orderId]);

  if (!order) return <p>Loading...</p>;

  return (
    <div>
      <h2>Order Status: {order.deliveryInfo.status}</h2>
      <DeliveryMap gps={order.deliveryInfo.gps} />
    </div>
  );
}
