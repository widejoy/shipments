// Drawer.js

import React from 'react';
import './Drawer.css';
import { FaChartLine, FaMoneyBillAlt, FaTruck, FaUser, FaArchive, FaHistory } from 'react-icons/fa';

const Drawer = () => {
  return (
    <div className="drawer">
      <div className="drawer-item">
        <FaChartLine /> Dashboard
      </div>
      <div className="drawer-item">
        <FaMoneyBillAlt /> Analytics
      </div>
      <div className="drawer-item">
        <FaTruck /> Rate Request
      </div>
      <div className="drawer-item">
        <FaTruck /> Quote Shipments
      </div>
      <div className="drawer-item">
        <FaUser /> User List
      </div>
      <div className="drawer-item">
        <FaArchive /> Archive
      </div>
      <div className="drawer-item">
        <FaHistory /> History
      </div>
    </div>
  );
};

export default Drawer;
