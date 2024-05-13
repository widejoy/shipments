// AppBar.js

import React from 'react';
import { FaBell } from 'react-icons/fa';
import './AppBar.css';

const AppBar = ({title = "Dashboard"}) => {
  return (
    <div className="app-bar">
      <div style={{marginLeft:'60px'}}><h1>{title}</h1></div>
      
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
