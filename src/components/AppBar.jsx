// AppBar.js

import React from 'react';
import { FaBell } from 'react-icons/fa';
import './AppBar.css';

const AppBar = () => {
  return (
    <div className="app-bar">
      <h1>Dashboard</h1>
      <div className="notification-area">
        <FaBell className="bell-icon" />
        <div className="avatar">
          <img src="avatar.jpg" alt="Avatar" />
        </div>
        <div className="profile-name">John Doe</div>
      </div>
    </div>
  );
};

export default AppBar;
