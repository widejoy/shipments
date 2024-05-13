// Drawer.js

import React from 'react';
import {useNavigate } from 'react-router-dom'; // Import useHistory hook
import './Drawer.css';
import { FaChartLine, FaMoneyBillAlt, FaTruck, FaUser, FaArchive, FaHistory } from 'react-icons/fa';

const Drawer = () => {
  const navigate = useNavigate(); // Access the history objec
  return (
    <div className="drawer">
      <div className="drawer-content">
        <div className="drawer-item" onClick={() => navigate('/')}>
          <FaChartLine className="icon" /> Dashboard
        </div>
        <div className="drawer-item" onClick={() => navigate('/analytics')}>
          <FaMoneyBillAlt className="icon" /> Analytics
        </div>
        <div className="drawer-item"  >
          <FaTruck className="icon" /> Rate Request
        </div>
        <div className="drawer-item" >
          <FaTruck className="icon" /> Quote Shipments
        </div>
        <div className="drawer-item"  >
          <FaUser className="icon" /> User List
        </div>
        <div className="drawer-item"  >
          <FaArchive className="icon" /> Archive
        </div>
        <div className="drawer-item"  >
          <FaHistory className="icon" /> History
        </div>
      </div>
    </div>
  );
};

export default Drawer;
