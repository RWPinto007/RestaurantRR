import React from 'react';

export default function DeliveryMap({ gps }) {
  return (
    <div>
      <h4>Delivery Location</h4>
      <p>Latitude: {gps.lat}</p>
      <p>Longitude: {gps.lng}</p>
    </div>
  );
}
