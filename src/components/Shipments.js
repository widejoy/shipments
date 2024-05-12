// components/Shipments.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shipments = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await axios.get('/api/shipments');
        setShipments(response.data);
      } catch (error) {
        console.error('Error fetching shipments:', error);
      }
    };

    fetchShipments();
  }, []);

  return (
    <div>
      <h1>Shipments</h1>
      <ul>
        {shipments.map(shipment => (
          <li key={shipment.id}>
            Tracking Number: {shipment.trackingNumber}
            {/* Render other shipment details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shipments;
