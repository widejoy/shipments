// Card.js

import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon

const Card = ({ heading, subtitle, iconColor, icon }) => {
  return (
    <div className="card">
      <div className="text-container">
        <div className="title">{heading}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="icon-container" style={{ backgroundColor: iconColor }}>
        <FontAwesomeIcon icon={icon} className="icon" /> {/* Render FontAwesomeIcon */}
      </div>
    </div>
  );
};

export default Card;
