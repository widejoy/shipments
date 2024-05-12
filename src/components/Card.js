// Card.js

import React from 'react';
import './Card.css';

const Card = ({ heading, subtitle, iconColor, icon }) => {
  return (
    <div className="card">
      <div className="content">
        <h2>{heading}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="icon-container" style={{ backgroundColor: iconColor }}>
        <span className="icon">{icon}</span>
      </div>
    </div>
  );
};

export default Card;
