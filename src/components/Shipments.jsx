import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Shipments.css'; // Import CSS file


const Shipments = () => {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/shipments');
        if (Array.isArray(response.data)) {
          setShipments(response.data);
          setLoading(false);
        } else {
          setError('Invalid data format');
        }
      } catch (error) {
        setError('Error fetching shipments');
        console.error('Error fetching shipments:', error);
      }
    };

    fetchShipments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
    
  return (
   
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>HBL#</th>
            <th>MBL#</th>
            <th>PO Ref#</th>
            <th>Receipt</th>
            <th>Loading</th>
            <th>Discharge</th>
            <th>Delivery</th>
            <th>Booking Number</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map(shipment => (
            <tr key={shipment.id}>
              <td>{shipment.hbl}</td>
              <td>{shipment.mbl}</td>
              <td>{shipment.po_ref}</td>
              <td>{shipment.receipt}</td>
              <td>{shipment.loading}</td>
              <td>{shipment.discharge}</td>
              <td>{shipment.delivery}</td>
              <td>{shipment.booking_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shipments;
