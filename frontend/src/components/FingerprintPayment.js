import React from 'react';

export default function FingerprintPayment() {
  const handlePayment = () => alert('Payment simulated!');
  return <button onClick={handlePayment}>Pay with Fingerprint</button>;
}
